import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movieRepo, filterOption, toggleHighlighted }) => {

  //topRated =
  //sort movieData based on ratings
  //iterate through last 5 in array, push each into topRated


  const movieCards = movieRepo.map(movie => <MovieCard
                                              movie={movie}
                                              key={movie.id}
                                              toggleHighlighted={toggleHighlighted} />);

  return (
    <section className='movie-list'> {movieCards} </section>
  )
}

export default MovieList;
