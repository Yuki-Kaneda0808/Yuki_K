import React from 'react';

const Home = () => {
  return (
    <header className="App-header">
      <h1>Welcome to Yuki Kaneda's Personal Website</h1>
      <p>
        Hello! I'm Yuki Kaneda, a reproductive and developmental biologist.
        This website showcases my research, publications, and interests.
      </p>
      <p>
        Feel free to explore my work and reach out if you have any questions!
      </p>
      <p>
        <a
          className="App-link"
          href="https://researchmap.jp/yukikaneda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Researchmap Profile
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href="https://scholar.google.com/citations?user=6YNJAUAAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar Profile
        </a>
      </p>
    </header>
  );
};

export default Home;
