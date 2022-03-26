import React from 'react';
import {displaySingleMovie, closeSingleMovie} from './mainContent'

const MovieCard = ({ movie }) => {
  let style = {
    backgroundImage: `url(${movie.backdrop_path})`
  }
  return (
    <article id={movie.id} onClick={displaySingleMovie} className='movie-card' style={style}>
      <h3>{movie.title}</h3>
    </article>
  )
}

export default MovieCard;
