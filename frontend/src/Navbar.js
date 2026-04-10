


import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom shadow-sm" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">

        <Link className="navbar-brand fw-bold" to="/">
          <img src="media/image/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/products">Products</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/pricing">Pricing</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/support">Support</Link>
  </li>

  {/* ✅ Login Button */}
  <li className="nav-item ms-3">
    <Link className="btn btn-outline-primary px-4" to="/login">
      Login
    </Link>
  </li>

  {/* 🔥 Signup Button */}
  <li className="nav-item ms-2">
    <Link
      className="btn btn-primary px-4"
      to="/signup"
      style={{ backgroundColor: "#387ed1", border: "none" }}
    >
      Sign Up
    </Link>
  </li>

</ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;