import Modal from 'react-modal';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const SingleMovieView = ({selectedMovie, toggleHighlighted}) => {
  let style = {
    backgroundImage: `url(${selectedMovie.backdrop_path})`
  }
  return (
    <section className='single-movie'>
      <button className='exit-single-movie-view' onClick={toggleHighlighted}>X</button>
      <section className='backdrop' style={style}>
        <h2>{ selectedMovie.title }</h2>
      </section>
      <section className='single-movie-info'>
        {selectedMovie.overview &&
          <div>
            <p>{ selectedMovie.tagline }</p>
          </div>
        }
        <img src={selectedMovie.poster_path}/>
        {selectedMovie.overview &&
          <div>
            <h3>Overview:</h3>
            <p>{ selectedMovie.overview }</p>
          </div>
        }
        {selectedMovie.budget &&
          <div>
            <h4>Budget: </h4>
            <p>{ selectedMovie.budget }</p>
          </div>
        }
        {selectedMovie.average_rating &&
          <div>
            <h4>Rating: </h4>
            <p>{ selectedMovie.average_rating }</p>
          </div>
        }
        {selectedMovie.runtime &&
          <div>
            <h4>Runtime: </h4>
            <p>{ selectedMovie.runtime }</p>
          </div>
        }
        {selectedMovie.revenue &&
          <div>
            <h4>Revenue: </h4>
            <p>{ selectedMovie.revenue }</p>
          </div>
        }
        {selectedMovie.release_date &&
          <div>
            <h4>Release Date: </h4>
            <p>{ selectedMovie.release_date }</p>
          </div>
        }

        {selectedMovie.genres &&
          <div>
            <h4>Genres: </h4>
            <p>{ selectedMovie.genres }</p>
          </div>
        }
      </section>
    </section>
  )
}


export default SingleMovieView;
