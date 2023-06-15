import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anserData, setAnswer] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
    setAnswer(searchTerm)
    // Add your search functionality here
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search patient"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <h2>{anserData}</h2>
    </div>
  );
};
export default SearchBar;