import "./App.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

function App() {
  return (
    <div className="parent-div">
      {/* Header */}
      <header className="header">
        <img className="logo" src="/indi.png" />

        {/* navbar links  */}
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="main">
        <h2>This is the main section.</h2>
        <section className="section">
          {/* left deiv */}
          <div className="section_leftDiv">
            <h2>this is left div</h2>
          </div>

          {/* right div  */}

          <div className="section_rightDiv">
            <h2>this is right div</h2>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* footer heading  */}
          <p>This is the footer</p>

          {/* links */}
          <div className="footer-links">
            <a
              href="https://github.com/AyushSharma72"
              target="
            _blank"
            >
              <FaSquareGithub /> Github
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/ayush-sharma-a155a8267/"
              target="
            _blank"
            >
              <FaLinkedin /> Linkedin
            </a>{" "}
            |
            <a
              href="https://ayush-portfolio-pearl.vercel.app/"
              target="
            _blank"
            >
              <CiGlobe /> Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
