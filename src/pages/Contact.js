import React from 'react';

const Contact = () => {
    return (
        <div style={{
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            padding: "50px",
            backgroundColor: "#f4f4f4",
            minHeight: "100vh"
        }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Get in Touch</h2>
            <p style={{ color: "#555", marginBottom: "40px" }}>We'd love to hear from you! Reach out to us below.</p>

            {/* Contact Form */}
            <form style={{ maxWidth: "600px", margin: "auto" }}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input type="email" placeholder="Your Email" style={inputStyle} />
                <textarea placeholder="Your Message" rows="5" style={inputStyle}></textarea>
                <button style={buttonStyle}>Send Message</button>
            </form>

            {/* Contact Info */}
            <div style={{ marginTop: "30px", color: "#333" }}>
                📞 +91 98765 43210 | ✉️ bioherbai@gmail.com  
                <br /> 📍 123, Ayurveda Street, India
            </div>
        </div>
    );
};

// **✅ Fix: Define the missing styles**
const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    display: "block",
    boxSizing: "border-box"
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2ecc71",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
};

export default Contact;
