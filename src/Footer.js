import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer">
        <h4 className="logo logo-footer">HSR</h4>
        <div className="footer-in">
          <p className="footer-text">
            Halwa Sweet Restaurant{" "}
            <span className="copyright">&copy; 2020</span>, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
