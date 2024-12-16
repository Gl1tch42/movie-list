import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import MovieList from './components/movieList/MovieList';
import LoginPage from './components/login/Login';
import Profile from './components/profile/Profile';
import { FavoriteProvider } from './components/favoriteContext/FavoriteContext';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  background-color: #141414;
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Superior = styled.div` 
  width: 100%; 
  display: flex; 
  justify-content: flex-end; 
  padding: 10px;
`;

function App() {
  const [movies, setMovies] = React.useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSearch = async (query) => {
    const apiKey = '18dc4cb389aac32424a96a41e455e924';
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    console.log(searchData)
    const moviesWithTrailers = await Promise.all(searchData.results.map(async (movie) => {
      const trailerUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`;
      console.log(trailerUrl)
      const trailerResponse = await fetch(trailerUrl);
      const trailerData = await trailerResponse.json();
      return {
        ...movie,
        trailer: trailerData.results.length > 0 ? `https://www.youtube.com/watch?v=${trailerData.results[0].key}` : null,
      };
    }));

    setMovies(moviesWithTrailers);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => { 
    localStorage.removeItem('isAuthenticated'); 
    setIsAuthenticated(false); 
  };

  return (
    <FavoriteProvider>
      <AppContainer>
        {!isAuthenticated ? (<LoginPage onLogin={handleLogin} />) : (<>
          <Superior>
            <Profile onLogout={handleLogout} />
          </Superior>
          <Header>Where is my movie ?</Header>
          <SearchBar onSearch={handleSearch} />
          <MovieList movies={movies} />
        </>)}
      </AppContainer>
    </FavoriteProvider>
  );
}

export default App;
