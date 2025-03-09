import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://i.pinimg.com/736x/84/db/d9/84dbd9b6b525e536c83146c28cf85d34.jpg")
    no-repeat center center/cover;
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  text-align: center;
  width: 350px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.8);
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  background: #ff6b6b;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #ff3b3b;
  }
`;

const Divider = styled.p`
  margin: 15px 0;
  color: white;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialButton = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  color: white;

  &:nth-child(1) {
    background: #1877f2;
  }
  &:nth-child(2) {
    background: #db4437;
  }

  &:hover {
    opacity: 0.8;
  }
`;

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here (if needed)
    navigate("/upload"); // Redirect to the Upload page
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <LoginButton onClick={handleLogin}>Login</LoginButton>

        <Divider>or sign in with</Divider>

        <SocialButtons>
          <SocialButton>Facebook</SocialButton>
          <SocialButton>Google</SocialButton>
        </SocialButtons>
      </LoginBox>
    </LoginContainer>
  );
}

export default LoginPage;
