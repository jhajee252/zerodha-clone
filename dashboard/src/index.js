
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import Dashboard from "./components/Dashboard"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 🔥 dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);