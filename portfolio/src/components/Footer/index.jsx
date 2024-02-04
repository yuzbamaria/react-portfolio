import React from "react";
// import "./style.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    
    <footer className="footer text-center d-flex justify-content-center align-items-center pb-2">
      <p><span id="current-year">©</span>
      {currentYear} Maria Yuzba. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
