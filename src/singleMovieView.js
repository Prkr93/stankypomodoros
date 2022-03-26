import Modal from 'react-modal';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {displaySingleMovie, closeSingleMovie} from './mainContent'

class SingleMovieView extends Component {
  constructor(movie) {
    super()
    this.state = {
      selectedMovie: false,
    }
  }
  // console.log(movie)
  render() {
    return (
      <div>
        {this.state.selectedMovie &&
          <div className='single-movie'>
            <img src={ this.selectedMovie.poster_path } />
          </div>
        }
      </div>
    )
  }
  }


export default SingleMovieView;
