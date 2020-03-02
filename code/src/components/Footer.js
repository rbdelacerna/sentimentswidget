import React from "react";

const footerStyle = {
  backgroundColor: "#1783f5",
  fontSize: "20px",
  color: "white",
  textAlign: "left",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%"
};

export const Footer = ({ children }) => (
  <div id="footer_sticky">
    <div id="footercard" style={footerStyle}>
      {children}
    </div>
  </div>
);
