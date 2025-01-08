// App.js
import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          background: "linear-gradient(to right, purple, blue)",
          minHeight: "100vh",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header style={{ padding: "1rem", textAlign: "center" }}>
          <h1>Survey Application</h1>
          <nav>
            <Link
              to="/"
              style={{
                margin: "0 1rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                margin: "0 1rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              to="/sitms"
              style={{
                margin: "0 1rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Sitemap
            </Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

function Thanks() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Thank You!</h2>
      <p>Your feedback has been submitted successfully.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>About This Application</h2>
      <p>This is a simple survey application designed for exercise purposes</p>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    rating: "",
    feedback: "",
  });

  const onFormChange = (key, value) => {
    setFormdata({
      ...formdata,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    formdata.feedback = formdata.feedbck.trim();
    navigate("/thanks");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Survey Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ margin: "1rem 0" }}>
          <label>
            Name:
            <input
              type="text"
              value={formdata.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              style={{ marginLeft: "1rem" }}
            />
          </label>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <label>
            Rating (1-10):
            <input
              type="number"
              min="1"
              max="10"
              value={formdata.rating}
              onChange={(e) => onFormChange("rating", e.target.value)}
              style={{ marginLeft: "1rem" }}
            />
          </label>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <label>
            Feedback:
            <textarea
              margin="auto"
              maxLength="250"
              value={formdata.feedback}
              onChange={(e) => onFormChange("feedback", e.target.value)}
              style={{
                margin: "auto",
                display: "block",
                width: "100%",
                maxWidth: "400px",
                height: "100px",
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
