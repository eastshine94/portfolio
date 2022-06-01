import React from 'react';
import About from './components/About';
import Career from './components/Career';
import Footer from './components/Footer';
// import Gnb from './components/Gnb';
import MainTop from './components/MainTop';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      {/* <Gnb /> */}
      <main>
        <MainTop />
        <About />
        <Skills />
        <Projects />
        <Career />
      </main>
      <Footer />
    </div>
  );
}

export default App;
