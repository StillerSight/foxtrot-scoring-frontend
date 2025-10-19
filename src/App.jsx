// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import TeamAlpha from "./pages/TeamAlpha";
import TeamBravo from "./pages/TeamBravo";
import TeamCharlie from "./pages/TeamCharlie";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/team-alpha">Team Alpha</Link>
        <Link to="/team-bravo">Team Bravo</Link>
        <Link to="/team-charlie">Team Charlie</Link>
      </nav>

       <main className="content">
        <Routes>
          <Route path="/team-alpha" element={<TeamAlpha />} />
          <Route path="/team-bravo" element={<TeamBravo />} />
          <Route path="/team-charlie" element={<TeamCharlie />} />
          <Route path="*" element={<p>Select a team above</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
