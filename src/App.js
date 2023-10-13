import React from 'react';
import "./index.css";
import About from './components/About';
import Contact from './components/Contact';
import CV from './components/CV';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <CV />
      <Contact />
    </main>
  );
}

export default App;


