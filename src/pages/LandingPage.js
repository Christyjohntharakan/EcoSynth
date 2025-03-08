import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundImage: `url('https://i.pinimg.com/736x/84/db/d9/84dbd9b6b525e536c83146c28cf85d34.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Logo on Top */}
      <div style={{
        position: "absolute",
        top: "20px",
        left: "30px",
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        background: "linear-gradient(90deg, #FFD700, #FFA500)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
      }}>
        HerboScan
      </div>

      {/* Hero Section */}
      <h1 style={{
        fontSize: "3.5rem",
        fontWeight: "bold",
        textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
        marginBottom: "10px"
      }}>
        AI-Powered Herb Adulteration Detection
      </h1>

      <p style={{
        fontSize: "1.5rem",
        maxWidth: "70%",
        lineHeight: "1.6",
        textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
      }}>
        Ensure purity & authenticity in medicinal herbs with advanced spectral analysis.
      </p>

      {/* Get Started Button */}
      <Link to="/detect">
        <button style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          borderRadius: "50px",
          background: "#FFD700",
          border: "none",
          color: "#333",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "2px 4px 10px rgba(0,0,0,0.2)"
        }}>
          Get Started
        </button>
      </Link>

      {/* Scroll Down Effect */}
      <div style={{
        position: "absolute",
        bottom: "30px",
        fontSize: "1.2rem",
        opacity: "0.8",
        animation: "bounce 2s infinite"
      }}>
        ⬇ Scroll Down to Upload Data
      </div>

    </div>
  );
};

export default LandingPage;
