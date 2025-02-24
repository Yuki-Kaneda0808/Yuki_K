import React from 'react';


const Home = () => {
  return (
    <div className="page-container transparent-background">
      <h1 className="welcome-title">Welcome to Yuki Kaneda's Personal Website</h1>
      <p className="intro-text">
        I am currently a second-year doctoral student, focusing on reproductive and developmental biology. My research explores the mechanisms of spermatogenesis and oogenesis in mice, utilizing developmental engineering techniques to generate genetically modified mice. Through this work, I aim to contribute to a deeper understanding of the molecular mechanisms that underpin fertility and development in mammals.
      </p>
      <p className="explore-text">
        Feel free to explore my work and reach out if you have any questions!
      </p>
      
      {/* Links Container moved above Lab Information */}
      <div className="links-container">
        <a className="App-link" href="https://researchmap.jp/yukikaneda" target="_blank" rel="noopener noreferrer">
          Researchmap Profile
        </a>
        <a className="App-link" href="https://scholar.google.com/citations?user=6YNJAUAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          Google Scholar Profile
        </a>
      </div>

      <div className="lab-info">
        <h2>Lab Information</h2>
        <p>
          I am part of the <strong>Department of Experimental Genome Research</strong> (Prof. Masahito Ikawa's lab) at Osaka University, within the Research Institute for Microbial Diseases.
        </p>
        <p>
          Visit our lab website: <a href="https://egr.biken.osaka-u.ac.jp/" target="_blank" rel="noopener noreferrer">Department of Experimental Genome Research</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
