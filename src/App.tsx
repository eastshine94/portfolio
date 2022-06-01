import React from 'react';
import About from './components/About';
import Career from './components/Career';
import MainTop from './components/MainTop';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <MainTop />
      <About />
      <Skills />
      <Projects />
      <Career />
    </div>
  );
}

export default App;
