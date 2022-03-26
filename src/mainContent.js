import React from 'react';
import Dashboard from './dashboard';
import SingleMovieView from './singleMovieView'

const MainContent = ({ movieRepo, filterOption, selectedMovie }) => {

  return (
    <main>
      <Dashboard movieRepo={movieRepo} filterOption={filterOption} />
    </main>
  )
}

export default MainContent;
