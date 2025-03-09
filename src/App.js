import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import UploadSection from "./components/UploadSection";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import GlobalStyles from "./styles/GlobalStyles";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <HeroSection />
              <UploadSection />
            </motion.div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
