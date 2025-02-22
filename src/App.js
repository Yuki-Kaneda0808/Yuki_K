import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Personal Website</h1>
        <p>
          Hello! I'm Yuki Kaneda, a reproductive and developmental biologist.
          This website showcases my research, publications, and interests.
        </p>
        <p>
          Feel free to explore my work and reach out if you have any questions!
        </p>
        <a
          className="App-link"
          href="https://github.com/Yuki-Kaneda0808"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
