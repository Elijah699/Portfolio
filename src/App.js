import React from 'react';

// pages
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Intro />
        <About />
        <Expertise />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
