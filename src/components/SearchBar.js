// SearchBar.js
import React, { useState } from "react";
import "../css/searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
