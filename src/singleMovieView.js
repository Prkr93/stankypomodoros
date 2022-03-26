import Modal from 'react-modal';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {displaySingleMovie, closeSingleMovie} from './mainContent'

const SingleMovieView = () => {

  return (
<div aria-hidden='true' className='single-movie'>
<img src={ displaySingleMovie.poster_path } />
</div>
  )
}

export default SingleMovieView;
