import React from 'react';
import Dashboard from './dashboard';
import SingleMovieView from './singleMovieView'

const MainContent = ({ movieRepo, filterOption, selectedMovie, toggleHighlighted, changeFilter }) => {

  return (
    <main>
      <Dashboard
        exact path={'/'}
        movieRepo={movieRepo}
        filterOption={filterOption}
        toggleHighlighted={toggleHighlighted}
        changeFilter={changeFilter}
      />
    </main>
  )
}

export default MainContent;
