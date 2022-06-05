import React from 'react';
import About from './components/About';
import Career from './components/Career';
import Footer from './components/Footer';
// import Gnb from './components/Gnb';
import MainTop from './components/MainTop';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      {/* <Gnb /> */}
      <main>
        <MainTop />
        <About />
        <Career />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
