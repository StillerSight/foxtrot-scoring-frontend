import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Background.css";

function Background() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Default (Home)
  let scale = 1;
  let origin = "50% 50%";

  // Team-specific zoom/pan
  if (path.includes("team-alpha")) {
    scale = 2;
    origin = "0% 0%";
  } else if (path.includes("team-bravo")) {
    scale = 2;
    origin = "50% 0%";
  } else if (path.includes("team-charlie")) {
    scale = 2;
    origin = "100% 0%";
  }

  return (
    <motion.div
      className="background"
      initial={false}
      animate={{ scale, transformOrigin: origin }}
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{ backgroundImage: `url('/background.jpg')` }}  // ✅ Direct path
    >
      <div className="vignette" />
    </motion.div>
  );
}

export default Background;
