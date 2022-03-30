import React from 'react';
import {NavLink} from 'react-router-dom';

const MovieCard = ({ movie, toggleHighlighted }) => {
  let style = {
    backgroundImage: `url(${movie.backdrop_path})`
  }
  return (
    <NavLink id={movie.id} className='movie-card' style={style} to={`movie/${movie.id}`} onClick={toggleHighlighted}>
      <h3>{movie.title}</h3>
    </NavLink>
  )
}

export default MovieCard;
