import React from "react";
import Header from "./portfolio/src/components/Header";
import Projects from "./portfolio/src/components/Projects";
import Navbar from "./portfolio/src/components/Navbar";
import Footer from "./portfolio/src/components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
