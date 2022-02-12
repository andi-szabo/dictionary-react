import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="title">Dictionary</div>
        </header>
        <main>
          <Dictionary defaultKeyword="modern" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/andi-szabo/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Andrea Szabo
          </small>
        </footer>
      </div>
    </div>
  );
}
