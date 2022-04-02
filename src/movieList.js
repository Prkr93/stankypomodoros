import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movieRepo, toggleHighlighted, filteredMovies }) => {

  let repo = filteredMovies ? filteredMovies : movieRepo;
console.log(filteredMovies, '<<filtered')
  const movieCards = repo.map(movie => <MovieCard
                              movie={movie}
                              key={movie.id}
                              toggleHighlighted={toggleHighlighted}
                              />
                            );
  return (
    <section className='movie-list'> {movieCards} </section>
  )
}

export default MovieList;
