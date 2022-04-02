import React from 'react';
import {NavLink} from 'react-router-dom';

const MovieCard = ({ movie, toggleHighlighted }) => {

  let url;
  movie.backdrop_path.includes('NoPhotoAvailable') ?
    url = 'https://i.imgflip.com/6b66bi.jpg' :
    url = `${movie.backdrop_path}`;

  return (
    <NavLink id={movie.id} className='movie-card' to={`movie/${movie.id}`} onClick={toggleHighlighted}>
      <img src={url} />
      <h3>{movie.title}</h3>
    </NavLink>
  )
}

export default MovieCard;
