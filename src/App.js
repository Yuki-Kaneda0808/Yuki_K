import './App.css';
import OocyteImage from './images/Oocyte.png'; // Import the background image

function App() {
  return (
    <div className="App">
      <div className="background-image">
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
        <div className="additional-info">
          <h2>Affiliation</h2>
          <p>Graduate School of Pharmaceutical Sciences, Osaka University (Concurrent)</p>
          <p>Research Institute for Microbial Diseases</p>

          <h2>Degree</h2>
          <p>Master's (Pharmaceutical Sciences) (Mar, 2023, Osaka University)</p>
          <p>Bachelor's (Pharmaceutical Sciences) (Mar, 2021, Osaka University)</p>

          <h2>Research History</h2>
          <p>Apr, 2023 - Present: Japan Society for the Promotion of Science</p>

          <h2>Awards</h2>
          <p>Oct, 2023: Excellent Performance Award (Extracurricular Activities Division), Ono Scholarship Foundation</p>
          <p>Mar, 2023: 2023 Osaka University Sawai Memorial Pharmacy Friends Award for Young Researchers</p>

          <h2>Research Areas</h2>
          <p>Life Sciences / Laboratory Animal Science / Reproductive Engineering</p>
          <p>Life Sciences / Developmental Biology / Fertilization</p>
        </div>
      </div>
    </div>
  );
}

export default App;
