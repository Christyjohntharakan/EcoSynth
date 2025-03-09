import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #4CAF50, #2E7D32);
`;

export const LeftImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

export const RightForm = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  background: #fff;
  padding: 40px;
  width: 80%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    color: #2E7D32;
    margin-bottom: 10px;
  }

  h2 span {
    font-weight: bold;
  }

  p {
    color: #666;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: #4CAF50;
  color: white;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #388E3C;
  }

  &.google {
    background: #DB4437;
  }

  &.facebook {
    background: #1877F2;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
