import React from "react";
import styled from "styled-components";
import { FiMail, FiPhone, FiMapPin, FiChevronDown } from "react-icons/fi"; // Import icons
import { useState } from "react";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2b4b29, #3e6b3e);
  color: white;
  padding: 50px 20px;
  text-align: center;
  margin-top: 50px;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Section = styled.div`
  flex: 1;
  min-width: 280px;
  margin: 20px;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #ffde59;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  color: #d1e8d1;
  margin: 8px 0;
`;

const Email = styled.a`
  color: #ffde59;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FaqsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Question = styled.div`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Answer = styled.p`
  font-size: 1.2rem;
  color: #d1e8d1;
  margin-top: 5px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
`;

const FooterText = styled.p`
  font-size: 1.2rem;
  color: #d1e8d1;
  margin-top: 20px;
`;

function Footer() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { question: "What is HerboScan?", answer: "HerboScan is an AI-powered tool that detects adulteration in medicinal herbs using spectral analysis." },
    { question: "How does spectral analysis work?", answer: "Spectral analysis examines the unique light absorption properties of herbs to differentiate between authentic and adulterated samples." },
    { question: "Is HerboScan available for mobile?", answer: "Yes! HerboScan is optimized for mobile use and works with portable spectrometers or smartphone attachments." }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        {/* Contact Us Section */}
        <Section>
          <Title>Contact Us</Title>
          <ContactInfo>
            <FiMapPin size={20} color="#ffde59" /> Trivandrum, Kerala, India
          </ContactInfo>
          <ContactInfo>
            <FiPhone size={20} color="#ffde59" /> +91 98765 43210
          </ContactInfo>
          <ContactInfo>
            <FiMail size={20} color="#ffde59" />
            <Email href="mailto:contact@herboscan.com">contact@herboscan.com</Email>
          </ContactInfo>
        </Section>

        {/* FAQs Section */}
        <Section>
          <Title>FAQs</Title>
          <FaqsContainer>
            {faqs.map((faq, index) => (
              <div key={index}>
                <Question onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {faq.question}
                  <FiChevronDown size={18} color="white" />
                </Question>
                {openFaq === index && <Answer>{faq.answer}</Answer>}
              </div>
            ))}
          </FaqsContainer>
        </Section>
      </FooterContent>

      {/* Footer Copyright */}
      <FooterText>© 2025 HerboScan. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
