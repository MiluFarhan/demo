import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Vite + React</p>
        <h1>Welcome to your demo home page</h1>
        <p className="subtitle">
          This is a minimal starter built with Vite and React. Edit
          <code> src/App.jsx </code>
          to start customizing your app.
        </p>
        <div className="actions">
          <a
            href="https://vite.dev/guide/"
            target="_blank"
            rel="noreferrer"
            className="button primary"
          >
            Vite Docs
          </a>
          <a
            href="https://react.dev/learn"
            target="_blank"
            rel="noreferrer"
            className="button ghost"
          >
            React Docs
          </a>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h2>Fast DX</h2>
          <p>Hot module reload, modern tooling, and instant feedback.</p>
        </section>
        <section className="card">
          <h2>Modern Stack</h2>
          <p>React, ES modules, and optimized builds out of the box.</p>
        </section>
        <section className="card">
          <h2>Ready to ship</h2>
          <p>Start prototyping or building production apps in minutes.</p>
        </section>
      </main>

      <footer className="footer">
        <p>Happy coding! 🚀</p>
      </footer>
    </div>
  );
}

export default App;
