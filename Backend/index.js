require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

// ✅ Models import
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const UserModel = require("./model/UserModel");
const OrdersModel = require("./model/OrdersModel"); // 🔥 FIXED

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ------------------- TEST ROUTE -------------------
app.get("/", (req, res) => {
  res.send("Server chal raha hai 🚀");
});

// ------------------- AUTH ROUTES -------------------
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Wrong password" });
    }

    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ------------------- HOLDINGS -------------------
app.get("/allHoldings", async (req, res) => {
  try {
    const data = await HoldingsModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// ------------------- POSITIONS -------------------
app.get("/allPositions", async (req, res) => {
  try {
    const data = await PositionsModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// ------------------- ORDERS -------------------
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    let existingHolding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;
        const totalInvestment =
          existingHolding.avg * existingHolding.qty + price * qty;

        existingHolding.qty = totalQty;
        existingHolding.avg = totalInvestment / totalQty;
        existingHolding.price = price;

        await existingHolding.save();
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });

        await newHolding.save();
      }
    }

    if (mode === "SELL") {
      if (!existingHolding) return res.send("Stock not found!");
      if (qty > existingHolding.qty) return res.send("Not enough quantity!");

      existingHolding.qty -= qty;
      existingHolding.price = price;

      if (existingHolding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await existingHolding.save();
      }
    }

    res.send("Order processed & Holdings updated!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// ------------------- CONNECT DB & START SERVER -------------------
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error ❌", err);
  });