import React from "react";

const Footer = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "60px 8%",
      background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
      textAlign: "left",
      boxShadow: "0 -10px 20px rgba(0,0,0,0.3)"
    }}>
      
      {/* About Section */}
      <div style={{
        width: "45%",
        padding: "20px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <h2 style={{ fontSize: "2rem", color: "#28f745", marginBottom: "10px" }}>🌿 About HerboScan</h2>
        <p style={{
          fontSize: "1.2rem",
          lineHeight: "1.5",
          color: "#f1f1f1"
        }}>
          HerboScan uses <strong>AI-powered spectral analysis</strong> to detect adulteration in medicinal herbs, promoting <strong>sustainable sourcing</strong> and <strong>consumer trust</strong>.
        </p>
      </div>

      {/* Contact Section */}
      <div style={{
        width: "45%",
        padding: "20px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <h2 style={{ fontSize: "2rem", color: "#ffcc00", marginBottom: "10px" }}>📞 Contact Us</h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.5", color: "#f1f1f1" }}>
          📧 Email: <a href="mailto:support@herboscan.com" style={{ color: "#ffcc00", textDecoration: "none" }}>support@herboscan.com</a> <br />
          📱 Phone: <a href="tel:+919876543210" style={{ color: "#ffcc00", textDecoration: "none" }}>+91 98765 43210</a>
        </p>
      </div>

    </div>
  );
};

export default Footer;
