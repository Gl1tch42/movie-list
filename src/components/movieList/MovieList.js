import React, { useContext } from 'react';
import Trailer from './../trailer/Trailer';
import FavoriteContext from './../favoriteContext/FavoriteContext';
import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieCard = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  width: 280px;
  max-height: 629px;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

const Overview = styled.p`
  font-size: 1rem;
  color: #999;
  height: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #e50914;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

function MovieList({ movies }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext);

  const isFavorite = (movie) => favorites.some(fav => fav.id === movie.id);

  return (
    <MovieContainer>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <Title>{movie.title}</Title>
          <Overview>{movie.overview}</Overview>
          <Trailer url={movie.trailer} />
          {isFavorite(movie) ? (
            <Button onClick={() => removeFavorite(movie.id)}>Remover dos Favoritos</Button>
          ) : (
            <Button onClick={() => addFavorite(movie)}>Adicionar aos Favoritos</Button>
          )}
        </MovieCard>
      ))}
    </MovieContainer>
  );
}

export default MovieList;

