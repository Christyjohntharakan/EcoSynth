import React, { useState } from "react";

const Detect = () => {
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(135deg, #FFE53B, #FF2525)", // Peach Background
      color: "#333",
      fontFamily: "'Poppins', sans-serif",
      padding: "20px"
    }}>
      
      {/* Upload Title */}
      <h1 style={{
        fontSize: "2.8rem",
        fontWeight: "bold",
        textShadow: "2px 2px 5px rgba(0,0,0,0.3)"
      }}>
        Upload Spectral Data
      </h1>

      {/* Drag & Drop Box */}
      <label htmlFor="fileUpload" style={{
        width: "60%",
        height: "200px",
        border: "2px dashed #28a745",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1.2rem",
        cursor: "pointer",
        transition: "0.3s",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)"
      }}>
        {file ? (
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {file.name} ✅
          </span>
        ) : (
          <span>Drag & drop your spectral data here or <span style={{ color: "#007BFF", fontWeight: "bold" }}>browse</span></span>
        )}
      </label>

      {/* File Input (Hidden) */}
      <input
        type="file"
        id="fileUpload"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* Upload Button */}
      {file && (
        <button style={{
          marginTop: "20px",
          padding: "12px 25px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          borderRadius: "10px",
          background: "#28a745",
          border: "none",
          color: "white",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "2px 4px 10px rgba(0,0,0,0.2)"
        }}>
          Upload File
        </button>
      )}
      
    </div>
  );
};

export default Detect;
