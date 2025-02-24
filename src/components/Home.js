import React from 'react';

const Home = () => {
  return (
    <div className="page-container transparent-background"> {/* 透過背景を追加 */}
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
    </div>
  );
};

export default Home;
