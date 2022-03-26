import React from 'react';
import MovieCard from './movieCard';

let topRated;

const MovieList = ({ movieRepo, filterOption }) => {

  //topRated =
  //sort movieData based on ratings
  //iterate through last 5 in array, push each into topRated
  if (filterOption === 'bangersToStankers') {

    console.log(filterOption)
    let stankersToBangers = movieRepo.sort((a, b) => a.average_rating - b.average_rating);
    let bangersToStankers = movieRepo.sort((a, b) => b.average_rating - a.average_rating);
    topRated = bangersToStankers.slice(0, 5);
  }
  console.log(topRated)

  const movieCards = movieRepo.map(movie => <MovieCard movie={movie} key={movie.id} />);

  return (
    <section className='movie-list'> {movieCards} </section>
  )
}

export default MovieList;
export { topRated };
