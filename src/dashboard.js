import React from 'react';
import Slideshow from './slideshow';
import Filter from './filter';
import MovieList from './movieList';



const Dashboard = ({ movieRepo, filterOption, toggleHighlighted }) => {
  //slideshow choose top 5 and randomize
  //filter needs to reference state (living in app)
  //movie list needs state of both movieRepo and filterOption -> sort array of movies based on filter option, render array

  let topRated;

  if (filterOption === 'bangersToStankers') {

    let stankersToBangers = movieRepo.sort((a, b) => a.average_rating - b.average_rating);
    let bangersToStankers = movieRepo.sort((a, b) => b.average_rating - a.average_rating);
    topRated = bangersToStankers.slice(0, 5);
  }

  return (
    <section className='dashboard'>
      <Slideshow movieRepo={movieRepo} topRated={topRated} />
      <Filter />
      <MovieList movieRepo={movieRepo} filterOption={filterOption} toggleHighlighted={toggleHighlighted} />
    </section>
  )
}

export default Dashboard;
