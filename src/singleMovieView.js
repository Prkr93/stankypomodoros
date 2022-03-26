import Modal from 'react-modal';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const SingleMovieView = ({selectedMovie}) => {
  console.log(selectedMovie)
  return (
    <div className='single-movie'>
      <img src={ selectedMovie.poster_path } />
    </div>
  )
}


export default SingleMovieView;
