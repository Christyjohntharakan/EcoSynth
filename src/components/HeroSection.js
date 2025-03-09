import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: url("https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg")
    no-repeat center center/cover;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: white;
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  max-width: 700px;
  color: #ffb07c; /* Soft peach color */
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black for contrast */
  padding: 10px 20px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
`;

// ✅ Transparent Login Button
const LoginButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  background: transparent; /* No background */
  border: 2px solid white; /* White outline */
  padding: 8px 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-family: "Poppins", sans-serif;

  &:hover {
    background: rgba(255, 255, 255, 0.2); /* Light transparent white on hover */
  }
`;

function HeroSection() {
  const navigate = useNavigate(); // ✅ Navigation hook

  return (
    <HeroContainer>
      {/* ✅ Transparent Login Button */}
      <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>

      {/* ✅ Hero Content */}
      <HeroTitle>HerboScan</HeroTitle>
      <HeroSubtitle>Ensuring purity, promoting sustainability.</HeroSubtitle>
    </HeroContainer>
  );
}

export default HeroSection;
