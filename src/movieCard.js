import React from 'react';

const MovieCard = ({ movie }) => {
  let style = {
    backgroundImage: `url(${movie.poster_path})`
  }
  return (
    <article style={style}>
      <h3>{movie.title}</h3>
    </article>
  )
}

export default MovieCard;
