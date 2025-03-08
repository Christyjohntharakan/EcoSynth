import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu if user clicks outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest(".menu-container")) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <div style={{ position: "fixed", top: "10px", right: "20px", zIndex: "1000" }}>
            {/* Three Dots Icon (☰) */}
            <div
                onClick={toggleMenu}
                style={{
                    cursor: "pointer",
                    fontSize: "28px",
                    color: "black",
                    background: "linear-gradient(45deg, #FFD700, #FFA500)", // Gradient Yellow
                    padding: "10px",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
                }}
            >
                ☰
            </div>

            {/* Sidebar Menu (Shows Only When Clicked) */}
            {menuOpen && (
                <div className="menu-container" style={{
                    position: "absolute",
                    top: "50px",
                    right: "0px",
                    width: "220px",
                    background: "linear-gradient(45deg, #FFD700, #FFA500)", // Gradient Yellow
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                    transition: "right 0.5s ease-in-out"
                }}>
                    {/* Close Button ✖ */}
                    <div
                        onClick={toggleMenu}
                        style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: "black",
                            textAlign: "right",
                            fontWeight: "bold"
                        }}>
                        ✖
                    </div>

                    {/* Menu Items */}
                    {["Detect", "About", "Contact", "Login", "Results", "Saved Data"].map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item.toLowerCase().replace(" ", "")}`}
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none",
                                padding: "10px",
                                fontSize: "18px",
                                fontWeight: "bold",
                                transition: "background 0.3s ease-in-out",
                                borderRadius: "5px"
                            }}
                            onMouseOver={(e) => e.target.style.background = "rgba(255, 255, 255, 0.3)"}
                            onMouseOut={(e) => e.target.style.background = "transparent"}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
