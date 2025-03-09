import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: #e0e0e0;
  z-index: 1000;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ scroll }) => scroll}%;
  background: linear-gradient(90deg, #4caf50, #388e3c);
  transition: width 0.2s ease-out;
`;

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ProgressBarContainer>
      <Progress scroll={scroll} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
