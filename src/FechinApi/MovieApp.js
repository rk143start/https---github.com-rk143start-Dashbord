import React, { useState } from 'react';
import axios from 'axios';

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${searchTerm}`
    ).catch((error) => {
      console.log(error,"Wrong Data")
    });
    
    setMovies(response.data.results);
    console.log(response.data)
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <button>Add to watchlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieApp;