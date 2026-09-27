import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SolutionFinder from "./components/SolutionFinder";
import BeforeAfter from "./components/BeforeAfter";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import TechKit from "./components/TechKit";
import Support from "./components/Support";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SolutionFinder />
      <BeforeAfter />
      <Services />
      <HowItWorks />
      <TechKit />
      <Support />
      <Footer />
    </>
  );
}

export default App;