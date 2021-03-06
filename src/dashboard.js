import React from 'react';
import Slideshow from './slideshow';
import Filter from './filter';
import MovieList from './movieList';

const Dashboard = ({ movieRepo, filterOption, toggleHighlighted, changeFilter, filteredMovies, searchThroughMovies }) => {
  let topRated = movieRepo.sort((a, b) => b.average_rating - a.average_rating).slice(0, 5);

  if (filterOption === 'bangersToStankers') {
    let bangersToStankers = filteredMovies.sort((a, b) => b.average_rating - a.average_rating);
  }
  if (filterOption === 'stankersToBangers') {
    let stankersToBangers = filteredMovies.sort((a, b) => a.average_rating - b.average_rating);
  }
  if (filterOption === 'aToZ') {
    let aToZ = filteredMovies.sort((a, b) => a.title.localeCompare(b.title))
  }
  if (filterOption === 'zToA') {
    let aToZ = filteredMovies.sort((a, b) => b.title.localeCompare(a.title))
  }


  return (
    <section className='dashboard'>
      <Slideshow
        exact path='/'
        toggleHighlighted={toggleHighlighted}
        topRated={topRated}
      />
      <Filter
        movieRepo={movieRepo}
        changeFilter={changeFilter}
        searchThroughMovies={searchThroughMovies}
      />
      <MovieList
        movieRepo={movieRepo}
        toggleHighlighted={toggleHighlighted}
        filteredMovies={filteredMovies}
      />
    </section>
  )
}

export default Dashboard;
