import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ResultWrapper = styled.section`
  background: #218838;
  padding: 50px;
  text-align: center;
  border-radius: 10px;
`;

const ResultText = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const ResultsSection = ({ result }) => {
  return (
    <ResultWrapper>
      <ResultText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {result ? result : "No results yet. Upload a file to get started!"}
      </ResultText>
    </ResultWrapper>
  );
};

export default ResultsSection;
