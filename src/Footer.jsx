import React from "react";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
       
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>📍 123 Main Street, Cityville</p>
          <p>📞 +1 234 567 890</p>
          <p>📧 contact@123.com</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <p>
            <a href="/" style={linkStyle}>Facebook</a> | <a href="/" style={linkStyle}>Instagram</a> | <a href="/" style={linkStyle}>Twitter</a>
          </p>
        </div>
      </div>

      <p style={{ marginTop: "10px" }}></p>
    </footer>
  );
}

// ✅ CSS Styles
const footerStyle = {
    backgroundColor: "lightblue",
    color: "Black",
    textAlign: "center",
    padding: "20px",
    marginTop: "20px",
  };
  
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "900px",
    margin: "auto",
  };
  
  const linkStyle = {
    color: "red",
    textDecoration: "none",
  };