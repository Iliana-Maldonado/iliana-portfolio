import { useState } from "react";
import "./App.css";

/* DESKTOP ICON */

function DesktopIcon({ icon, label, onClick }) {
  return (
    <button className="desktop-icon" onClick={onClick}>
      <span className="desktop-icon-image">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

/* REUSABLE WINDOW */

function PortfolioWindow({ title, children, onClose }) {
  return (
    <div className="tutorial-window">
      <div className="tutorial-header">
        <span>{title}</span>

        <div className="tutorial-controls">
          <button>—</button>
          <button>□</button>
          <button onClick={onClose}>×</button>
        </div>
      </div>

      <div className="window-body">
      {children}
      </div>
    </div>
  );
}

/* REUSABLE TAG */

function TagGroup({ title, children }) {
  return (
    <div className="tag-group">
      <h3>{title}</h3>

      <div className="about-tags">
        {children}
      </div>
    </div>
  );
}

/* APP */

function App() {
  const [activeWindow, setActiveWindow] = useState("welcome");

  /* CONTENT THAT CHANGES INSIDE THE SAME WINDOW */

  function renderWindowContent() {
    switch (activeWindow) {
      /* WELCOME */

      case "welcome":
        return (
          <PortfolioWindow
            title="🌼 Welcome to Iliana_OS 🌷"
            onClose={() => setActiveWindow(null)}
          >
            <div className="tutorial-content">
              <div className="tutorial-text">
                <h2>✨ How to explore:</h2>

                <p>
                  💗 Click the icons on the left
                  <br />
                  to open different windows.
                </p>

                <p>
                  ⭐ Each section contains a little
                  <br />
                  piece of my work and experience.
                </p>

                <p>
                  🌿 Explore at your own pace.
                  <br />
                  You can always come back here.
                </p>

                <hr />

                <p className="tutorial-start">
                  ➜ Start with <strong>[ about_me.exe ]</strong>
                  <br />
                  to get to know me better!
                </p>
              </div>

              <div className="tutorial-decoration">
                <img
                  src="/images/pixel-computer.png"
                  alt="Cute vintage computer"
                  className="pixel-computer"
                />
              </div>

              <button
                className="window-button next-button"
                onClick={() => setActiveWindow("about")}
              >
                Next →
              </button>
            </div>
          </PortfolioWindow>
        );

      /* ABOUT */

case "about":
  return (
    <PortfolioWindow
      title="💌 about_me.exe"
      onClose={() => setActiveWindow(null)}
    >
      <div className="tutorial-content">

        <div className="tutorial-text">
          <h2>Hello, I'm Iliana! 🌷</h2>

          <p>
            Frontend Developer & UX/UI Designer based in Dublin,
            Ireland.
          </p>

          <p>
            I love combining design, technology and creative
            problem-solving to build thoughtful digital experiences.
          </p>

          <p>
            I enjoy turning complex ideas into thoughtful,
            intuitive and beautiful digital experiences.
          </p>

          <p>
            Welcome to my little corner of the internet. 🍓
          </p>

          <hr />

          <div className="about-tags">
            <span>📍 Dublin</span>
            <span>🌎 Spanish / English</span>
            <span>🎨 UX/UI</span>
            <span>💻 Frontend</span>
            <span>✨ Product Designer</span>
            <span>🌷 Creative</span>
          </div>
        </div>

        <div className="tutorial-decoration">
          <img
            src="/images/pixel-computer.png"
            alt="Cute vintage computer"
            className="pixel-computer"
          />
        </div>

        <div className="about-actions">
          <button
            className="window-button"
            onClick={() => setActiveWindow("projects")}
          >
            View Projects →
          </button>

          <button className="window-button">
            Download CV ↓
          </button>
        </div>

      </div>
    </PortfolioWindow>
  );

      /* PROJECTS */

      case "projects":
        return (
          <PortfolioWindow
            title="🧺 projects.exe"
            onClose={() => setActiveWindow(null)}
          >
            <div className="tutorial-content">
              <div className="tutorial-text">
                <h2>Selected Projects 🌸</h2>

                <p>VenueFlow</p>
                <p>Polaris</p>
                <p>Office Depot México</p>
              </div>
            </div>
          </PortfolioWindow>
        );

      /* EXPERIENCE */

      case "experience":
        return (
          <PortfolioWindow
            title="🍄 experience.exe"
            onClose={() => setActiveWindow(null)}
          >
            <div className="tutorial-content">
              <div className="tutorial-text">
                <h2>Experience 🍄</h2>

                <p>My professional journey will live here.</p>
              </div>
            </div>
          </PortfolioWindow>
        );

      /* SKILLS */

case "skills":
  return (
    <PortfolioWindow
      title="📷 skills.exe"
      onClose={() => setActiveWindow(null)}
    >
      <div className="tutorial-content">
        <div className="tutorial-text">
          <h2>Skills ✨</h2>

          <TagGroup title="🎨 Design">
            <span>UX/UI</span>
            <span>Figma</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
            <span>User Flows</span>
            <span>Design Systems</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </TagGroup>

          <TagGroup title="💻 Development">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Node.js</span>
            <span>Java</span>
            <span>MySQL</span>
            <span>Git / GitHub</span>
          </TagGroup>

          <TagGroup title="🌱 Other">
            <span>Product Design</span>
            <span>Responsive Design</span>
            <span>Agile</span>
            <span>Scrum</span>
            <span>Jira</span>
            <span>Miro</span>
            <span>Spanish</span>
            <span>English</span>
          </TagGroup>
        </div>
      </div>
    </PortfolioWindow>
  );

      /* CONTACT */

      case "contact":
        return (
          <PortfolioWindow
            title="🌷 contact.exe"
            onClose={() => setActiveWindow(null)}
          >
            <div className="tutorial-content">
              <div className="tutorial-text">
                <h2>Let's create something beautiful 💌</h2>

                <p>Contact information will live here.</p>
              </div>
            </div>
          </PortfolioWindow>
        );

      default:
        return null;
    }
  }

  return (
    <main className="desktop">
      {/* TOP BAR */}

      <header className="topbar">
        <div className="brand">
          🍓 <strong>ILIANA_OS</strong>
          <span>v1.0</span>
        </div>

        <div className="top-message">
          ♡ Let's create something beautiful
        </div>

        <div className="top-status">
          <span>◉ Dublin, Ireland</span>
          <span>◉ Available for opportunities</span>
        </div>
      </header>

      {/* DESKTOP */}

      <div className="desktop-body">
        <aside className="desktop-icons">
          <DesktopIcon
            icon="💌"
            label="about_me.exe"
            onClick={() => setActiveWindow("about")}
          />

          <DesktopIcon
            icon="🧺"
            label="projects"
            onClick={() => setActiveWindow("projects")}
          />

          <DesktopIcon
            icon="🍄"
            label="experience"
            onClick={() => setActiveWindow("experience")}
          />

          <DesktopIcon
            icon="📷"
            label="skills"
            onClick={() => setActiveWindow("skills")}
          />

          <DesktopIcon
            icon="🌷"
            label="contact"
            onClick={() => setActiveWindow("contact")}
          />

          <DesktopIcon
            icon="🪴"
            label="github"
            onClick={() =>
              window.open(
                "https://github.com/Iliana-Maldonado",
                "_blank"
              )
            }
          />
        </aside>

        {/* ONLY ONE WINDOW LIVES HERE */}

        <section className="workspace">
          {renderWindowContent()}
        </section>
      </div>

      {/* TASKBAR */}

      <footer className="taskbar">
        <button
          className="start-button"
          onClick={() => setActiveWindow("welcome")}
        >
          🌼 Start
        </button>

        <div className="taskbar-spacer" />

        <span>💌</span>
        <span>💼</span>
        <span>🐙</span>
      </footer>
    </main>
  );
}

export default App;