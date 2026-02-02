import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero_section from "./components/Hero/Hero_section.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Premium from "./components/premium_section/Premium.jsx";
import App_moto from "./components/App_moto/App_moto.jsx";
import CTASection from "./components/CTASection/CTASection.jsx";
import Info from "./components/About/Info.jsx";
import PrivacyPolicy from "./components/Moms_Kitchen/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/Term_and_Condition/TermAndConditions.jsx"; // Your existing Terms & Conditions page

// Home Page Component
function HomePage() {
  return (
    <>
      <Header />
      <Info />
      <Hero_section />
      <App_moto />
      <CTASection />
      <Premium />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
