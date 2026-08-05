import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { FAQ } from "./components/FAQ";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
