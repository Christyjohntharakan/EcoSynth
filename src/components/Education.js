import React from "react";
import styled from "styled-components";

const EducationContainer = styled.div`
  background: #f4f4f4;
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  color: #2b4b29;
  font-size: 2.5rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

function Education() {
  return (
    <EducationContainer>
      <Title>Why Herbal Purity Matters</Title>
      <Content>
        Adulteration of medicinal herbs reduces their effectiveness and can cause health issues.
        Learn how spectral data ensures purity and promotes sustainability.
      </Content>
    </EducationContainer>
  );
}

export default Education;
