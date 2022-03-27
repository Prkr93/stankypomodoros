import React from 'react';
import Dashboard from './dashboard';
import SingleMovieView from './singleMovieView'

const MainContent = ({ movieRepo, filterOption, selectedMovie, toggleHighlighted }) => {

  return (
    <main>
      <Dashboard
        movieRepo={movieRepo}
        filterOption={filterOption}
        toggleHighlighted={toggleHighlighted}
      />
    </main>
  )
}

export default MainContent;
