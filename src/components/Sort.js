import React from "react";

function Sort({ onSortChange }) {
  return (
    <div>
      <label>Sort by:</label>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Sort;