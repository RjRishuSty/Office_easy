// CubeBackground.jsx
import React from "react";
import "./CubeBackground.css";

const CubeBackground = () => {
  return (
    <div className="cube-background">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="cube" />
      ))}
    </div>
  );
};

export default CubeBackground;
