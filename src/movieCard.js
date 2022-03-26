import React from 'react';

const MovieCard = ({ movie }) => {
  let style = {
    backgroundImage: `url(${movie.backdrop_path})`
  }
  return (
    <article id={movie.id} className='movie-card' style={style}>
      <h3>{movie.title}</h3>
    </article>
  )
}

export default MovieCard;
