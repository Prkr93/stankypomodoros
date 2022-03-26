import React from 'react';
import Dashboard from './dashboard';

let displaySingleMovie;
let closeSingleMovie;

const MainContent = ({ movieRepo, filterOption }) => {

  displaySingleMovie = () => {
    console.log('banana')
  }

  closeSingleMovie = () => {

  }


  return (
    <main>
      <Dashboard movieRepo={movieRepo} filterOption={filterOption} />

    </main>
  )
}

export default MainContent;
export {displaySingleMovie, closeSingleMovie};
