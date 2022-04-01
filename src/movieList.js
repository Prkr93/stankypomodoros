import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movieRepo, filterOption, toggleHighlighted }) => {

  const movieCards = movieRepo.map(movie => <MovieCard
                                              movie={movie}
                                              key={movie.id}
                                              toggleHighlighted={toggleHighlighted} />);

  return (
    <section className='movie-list'> {movieCards} </section>
  )
}

export default MovieList;
