import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import Filter from "./Filter";
import Sort from "./Sort";

import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [sortBy, setSortBy] = useState("");

  function handleFilterChange(e) {
    const value = e.target.value;
    switch (value) {
      case "All":
        setHogs(hogsData);
        break;
      case "Greased":
        setHogs(hogsData.filter((hog) => hog.greased === true));
        break;
      default:
        setHogs(hogsData);
    }
  }

  function handleSortChange(value) {
    setSortBy(value);
  }

  const sortedHogs = [...hogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "weight") {
      return a.weight - b.weight;
    } else {
      return 0; 
    }
  });

  return (
    <div className="App">
      <Nav>
        <Filter onFilterChange={handleFilterChange} />
        <Sort onSortChange={handleSortChange} />
      </Nav>

      <div className="ui grid container">
        {sortedHogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;
