import React, { useState, useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

// pages
import Header from './components/Header';
import Intro from './components/Intro';
import Capability from './components/Capability';
import Contact from './components/Contact';
import Work from './components/Work';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const override = `
      background: none;
  `;

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <PacmanLoader
            size={40}
            css={override}
            color={'#3d2c8d'}
            loading={loading}
          />
        </div>
      ) : (
        <div>
          <Header />
          <Intro />
          <Capability />
          <Work />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;