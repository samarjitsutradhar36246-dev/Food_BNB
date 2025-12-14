import Hero_section from "./components/Hero/Hero_section.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
// import Features from "./components/features_section/Features.jsx";
// import Top_Dishes from "./components/Top_Dishes/Top_Dishes.jsx";
import Premium from "./components/premium_section/Premium.jsx";
import App_moto from "./components/App_moto/App_moto.jsx";
import CTASection from "./components/CTASection/CTASection.jsx";
import Info from "./components/About/Info.jsx";

function App() {
  return (
    <>
      <Header />
      <Info />
      <Hero_section />
      {/* <Features /> */}
      {/* <Top_Dishes /> */}
      <App_moto />
      <CTASection />
      <Premium />
      <Footer />
    </>
  );
}

export default App;
