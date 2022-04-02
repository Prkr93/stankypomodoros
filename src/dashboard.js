import React from 'react';
import Slideshow from './slideshow';
import Filter from './filter';
import MovieList from './movieList';



const Dashboard = ({ movieRepo, filterOption, toggleHighlighted }) => {
  let topRated = movieRepo.sort((a, b) => b.average_rating - a.average_rating).slice(0, 5);

  if (filterOption === 'bangersToStankers') {
    let bangersToStankers = movieRepo.sort((a, b) => b.average_rating - a.average_rating);
    // topRated = bangersToStankers.slice(0, 5);
  }
  if (filterOption === 'stankersToBangers') {
    let stankersToBangers = movieRepo.sort((a, b) => a.average_rating - b.average_rating);
  }
  if (filterOption === 'aToZ') {
    let aToZ = movieRepo.sort((a, b) => a.title.localeCompare(b.title))
  }
  if (filterOption === 'zToA') {
    let aToZ = movieRepo.sort((a, b) => b.title.localeCompare(a.title))
  }


  return (
    <section className='dashboard'>
      <Slideshow exact path='/' toggleHighlighted={toggleHighlighted} topRated={topRated} />
      <Filter />
      <MovieList movieRepo={movieRepo} filterOption={filterOption} toggleHighlighted={toggleHighlighted} />
    </section>
  )
}

export default Dashboard;
