import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { FAQ } from "./components/FAQ";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "section#how, section#privacy, section#faq, section#waitlist"
    );
    sections.forEach((s) => s.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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
