import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";

function App()
{
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: '80px' }}>
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}

export default App;