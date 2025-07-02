import React, { useState } from "react";

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="ui eight wide column" onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} style={{ width: "100%" }} />

      {showDetails && (
        <div className="hog-details">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
          <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;