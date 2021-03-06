import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import logoWhite from './logo-white.png';

const SingleMovieView = ({selectedMovie, toggleHighlighted, selectedVideos}) => {
  let style = { backgroundImage: `url(${selectedMovie.backdrop_path})` };

  return (
    <section className='single-movie'>
      <NavLink to='/' className='exit-single-movie-view' onClick={toggleHighlighted}>X</NavLink>
      <section className='backdrop' style={style}>
        <h2>{ selectedMovie.title }</h2>
      </section>
        {!!selectedMovie.tagline &&
          <section className='tagline'>
            <p>{ selectedMovie.tagline }</p>
          </section>
        }
      <section className='single-movie-info'>
        {!!selectedMovie.poster_path &&
          <div className='movie-poster'>
            <img src={selectedMovie.poster_path}/>
          </div>
        }
        <div className='movie-details'>
          {!!selectedVideos &&
            <div className='videos'>
              <ReactPlayer url={ selectedVideos } />
            </div>
          }
          {!!selectedMovie.overview &&
            <article className='overview'>
              <h3>Overview:</h3>
              <p>{ selectedMovie.overview }</p>
            </article>
          }
          <article className='details'>
            {!!selectedMovie.budget &&
              <div className='budget'>
                <h4>Budget: </h4>
                <p>{ `$${selectedMovie.budget.toLocaleString("en-US")}` }</p>
              </div>
            }
            {!!selectedMovie.average_rating &&
              <div className='average_rating'>
                <h4>Rating: </h4>
                <p>
                  { selectedMovie.average_rating.toFixed(2) }
                  <img src={logoWhite} className='pomodoros' />
                </p>
              </div>
            }
            {!!selectedMovie.runtime &&
              <div className='runtime'>
                <h4>Runtime: </h4>
                <p>{ `${selectedMovie.runtime} min` }</p>
              </div>
            }
            {!!selectedMovie.revenue &&
              <div className='revenue'>
                <h4>Revenue: </h4>
                <p>{ `$${selectedMovie.revenue.toLocaleString("en-US")}` }</p>
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
                <p>{ selectedMovie.genres.reduce((acc, genre, index) => {
                  let stringToReturn = (index === selectedMovie.genres.length - 1) ? genre : genre + ', ';
                  return [...acc, stringToReturn]
                }, []) }</p>
              </div>
            }
          </article>
        </div>
      </section>
    </section>
  )
}

export default SingleMovieView;
