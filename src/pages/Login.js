import React from 'react';

const Login = () => {
    return (
        <div style={{
            display: "flex",
            height: "100vh",
            backgroundColor: "#f4f4f4"
        }}>
            {/* Left Side - Illustration or Pattern */}
            <div style={{
                flex: 1,
                backgroundImage: "url('https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            </div>

            {/* Right Side - Login Form */}
            <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "40px"
            }}>
                <div style={{ width: "80%", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px", fontFamily: "'Poppins', sans-serif" }}>
                        Welcome Back!
                    </h2>
                    <p style={{ color: "#777", marginBottom: "30px" }}>Login to your account</p>

                    {/* Email & Password Fields */}
                    <input type="email" placeholder="Email or Phone" style={inputStyle} />
                    <input type="password" placeholder="Password" style={inputStyle} />

                    {/* Forgot Password Button - Fixed Warning */}
                    <div style={{ textAlign: "right", marginBottom: "20px" }}>
                        <button 
                            style={forgotPasswordStyle}
                            onClick={() => alert('Redirecting to Forgot Password Page!')}
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button style={buttonStyle}>Login</button>

                    <p style={{ margin: "20px 0", color: "#777" }}>or</p>

                    {/* Social Logins */}
                    <button style={socialButtonStyle("#db4437")}>Sign in with Google</button>
                    <button style={socialButtonStyle("#1877f2")}>Sign in with Facebook</button>
                </div>
            </div>
        </div>
    );
};

// ✅ Reusable Styles
const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem"
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2ecc71",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

const forgotPasswordStyle = {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "0.9rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0"
};

const socialButtonStyle = (bgColor) => ({
    width: "100%",
    padding: "12px",
    backgroundColor: bgColor,
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px"
});

export default Login;
