// import Modal from 'react-modal';
import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
const SingleMovieView = ({selectedMovie, toggleHighlighted, selectedVideos}) => {
  let style = {
    backgroundImage: `url(${selectedMovie.backdrop_path})`
  }
  return (
    <section className='single-movie'>
      <NavLink to='/' className='exit-single-movie-view' onClick={toggleHighlighted}>X</NavLink>
      <section className='backdrop' style={style}>
        <h2>{ selectedMovie.title }</h2>
      </section>
        {!!selectedMovie.tagline &&
          <div className='tagline'>
            <p>{ selectedMovie.tagline }</p>
          </div>
        }
      <section className='single-movie-info'>
        <img src={selectedMovie.poster_path}/>
        {!!selectedMovie.overview &&
          <div className='overview'>
            <h3>Overview:</h3>
            <p>{ selectedMovie.overview }</p>
          </div>
        }
        {!!selectedMovie.budget &&
          <div className='budget'>
            <h4>Budget: </h4>
            <p>{ selectedMovie.budget }</p>
          </div>
        }
        {!!selectedMovie.average_rating &&
          <div className='average_rating'>
            <h4>Rating: </h4>
            <p>{ selectedMovie.average_rating }</p>
          </div>
        }
        {!!selectedMovie.runtime &&
          <div className='runtime'>
            <h4>Runtime: </h4>
            <p>{ selectedMovie.runtime }</p>
          </div>
        }
        {!!selectedMovie.revenue &&
          <div className='revenue'>
            <h4>Revenue: </h4>
            <p>{ selectedMovie.revenue }</p>
          </div>
        }
        {!!selectedMovie.release_date &&
          <div className='overrelease_dateview'>
            <h4>Release Date: </h4>
            <p>{ selectedMovie.release_date }</p>
          </div>
        }
        {!!selectedMovie.genres &&
          <div className='genres'>
            <h4>Genres: </h4>
            <p>{ selectedMovie.genres }</p>
          </div>
        }
        {!!selectedVideos &&
          <div className='videos'>
            <ReactPlayer url={ selectedVideos } />
          </div>
        }
      </section>
    </section>
  )
}


export default SingleMovieView;
