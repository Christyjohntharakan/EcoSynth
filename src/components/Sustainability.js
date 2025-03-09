import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f5f5dc;
  text-align: center;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c2c2c;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #4a4a4a;
  max-width: 600px;
  margin-top: 10px;
`;

const Sustainability = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Section>
        <Title>🌿 Sustainable Herbal Practices</Title>
        <Text>
          HerboScan ensures the authenticity of medicinal herbs, preventing overharvesting and promoting ethical sourcing.
          By detecting adulterants, we reduce environmental damage and encourage sustainable trade.
        </Text>
      </Section>
    </motion.div>
  );
};

export default Sustainability;
