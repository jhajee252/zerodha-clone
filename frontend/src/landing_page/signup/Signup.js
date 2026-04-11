import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
   //   // 🔥 redirect + message
  //   navigate("/", { state: { message: "Signup successful ✅" } });
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://zerodha-clone-2-nu25.onrender.com/signup",
      formData
    );

    if (res.data.success) {
      alert("Signup successful ✅");
      navigate("/");
    } else {
      alert(res.data.message || "Signup failed ❌");
    }
  } catch (err) {
  console.log("ERROR:", err.response?.data || err.message);
  alert("Server error ❌");
}
};

 

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    background: "#f5f7fa"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "300px"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#387ed1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Signup;