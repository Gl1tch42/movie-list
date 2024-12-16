import React, { createContext, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
