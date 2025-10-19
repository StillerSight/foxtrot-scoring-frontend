// src/components/Background.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

let origin = "center center";

function Background() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Default view (home)
  let scale = 1;

  // Adjust zoom and focus for each team
  if (path.includes("team-alpha")) {
    scale = 2;
    origin = "0% 0%"; // moves focus to top-left region
  } else if (path.includes("team-bravo")) {
    scale = 2;
    origin = "50% 0%"; // middle-right
  } else if (path.includes("team-charlie")) {
    scale = 2;
    origin = "100% 0%"; // bottom area
  }

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url('/background.jpg')`,
        transform: `scale(${scale})`,
        transformOrigin: origin,
      }}
    >
      <div className="vignette" />
    </div>
  );
}

export default Background;
