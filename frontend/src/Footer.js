import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafafa", paddingTop: "40px", paddingBottom: "40px" }}>
      <div className="container">
        <div className="row mb-4">

          {/* Logo */}
          <div className="col-md-3 col-sm-6 mb-4">
            <img src="media/image/logo.svg" alt="Logo" style={{ width: "60%" }} />
            <p className="mt-3" style={{ fontSize: "0.9rem", color: "#555" }}>
              © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Account Links */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6>Account</h6>
            <ul className="list-unstyled">
              <li><Link to="/open-account" className="text-muted text-decoration-none">Open demat account</Link></li>
              <li><Link to="/minor-account" className="text-muted text-decoration-none">Minor demat account</Link></li>
              <li><Link to="/nri-account" className="text-muted text-decoration-none">NRI demat account</Link></li>
              <li><Link to="/huf-account" className="text-muted text-decoration-none">HUF demat account</Link></li>
              <li><Link to="/commodity" className="text-muted text-decoration-none">Commodity</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li><Link to="/support" className="text-muted text-decoration-none">Support portal</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact us</Link></li>
              <li><Link to="/complaint" className="text-muted text-decoration-none">How to file a complaint?</Link></li>
              <li><Link to="/complaints-status" className="text-muted text-decoration-none">Status of complaints</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
              <li><Link to="/philosophy" className="text-muted text-decoration-none">Philosophy</Link></li>
              <li><Link to="/careers" className="text-muted text-decoration-none">Careers</Link></li>
              <li><Link to="/cares" className="text-muted text-decoration-none">Zerodha Cares</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/ipos" className="text-muted text-decoration-none">Upcoming IPOs</Link></li>
              <li><Link to="/charges" className="text-muted text-decoration-none">Brokerage charges</Link></li>
              <li><Link to="/holidays" className="text-muted text-decoration-none">Market holidays</Link></li>
              <li><Link to="/calculators" className="text-muted text-decoration-none">Calculators</Link></li>
              <li><Link to="/markets" className="text-muted text-decoration-none">Markets</Link></li>
            </ul>
          </div>

        </div>

        {/* Legal & Risk Disclosure */}
        <div className="mt-4 text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI. SEBI Registration no.: INZ000031633.
            Depository services through Zerodha Broking Ltd. SEBI Registration no.: IN-DP-431-2019.
            Registered Address: #153/154, 4th Cross, Dollars Colony, JP Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;