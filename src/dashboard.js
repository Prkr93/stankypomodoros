import React from 'react';
import Slideshow from './slideshow';
import Filter from './filter';
import MovieList from './movieList';

const Dashboard = ({ movieRepo, filterOption }) => {
  console.log(filterOption)
  //slideshow choose top 5 and randomize
  //filter needs to reference state (living in app)
  //movie list needs state of both movieRepo and filterOption -> sort array of movies based on filter option, render array

  //const slideshowMovies = movieRepo

  return (
    <section>
      <Slideshow />
      <Filter />
      <MovieList movieRepo={movieRepo} filterOption={filterOption} />
    </section>
  )
}

export default Dashboard;
