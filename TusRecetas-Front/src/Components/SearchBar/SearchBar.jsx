import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(searchTerm);
  }

  return (
    <form onSubmit={handleFormSubmit} className="searchBar">
      <input type="text" name="search" autoComplete="off" id="searchInput" placeholder="Haz tu búsqueda" value={searchTerm} onChange={handleInputChange} />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;