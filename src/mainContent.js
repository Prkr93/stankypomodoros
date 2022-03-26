import React from 'react';
import Dashboard from './dashboard';
import SingleMovieView from './singleMovieView'
let displaySingleMovie;
let closeSingleMovie;

const MainContent = ({ movieRepo, filterOption }) => {

  displaySingleMovie = (e) => {
    let targetMovie = movieRepo.find(movie => movie.id == e.target.id)
    console.log(targetMovie)
    return targetMovie
  }

  closeSingleMovie = () => {

  }


  return (
    <main>
      <Dashboard movieRepo={movieRepo} filterOption={filterOption} />
      <SingleMovieView />
    </main>
  )
}

export default MainContent;
export {displaySingleMovie, closeSingleMovie};
