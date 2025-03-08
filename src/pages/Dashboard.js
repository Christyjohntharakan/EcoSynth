import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4" }}>
            
            {/* Hero Section with Full-Screen Background */}
            <div style={{
                backgroundImage: "url('/background.jpg')", // Ensure this path is correct
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)"
            }}>
                {/* HerboScan Title */}
                <h1 style={{
                    fontSize: "5rem",
                    fontFamily: "'Cinzel Decorative', serif",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    background: "linear-gradient(90deg, #4CAF50, #2E7D32)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "3px 3px 10px rgba(0,0,0,0.3)"
                }}>
                    HerboScan
                </h1>

                <p style={{ fontSize: "1.5rem", maxWidth: "80%" }}>
                    Experience the true quality of natural herbs with AI-powered detection.
                </p>
            </div>

            {/* Footer */}
            <div style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#222",
                color: "white",
                marginTop: "50px"
            }}>
            </div>

        </div>
    );
};

export default Dashboard;
