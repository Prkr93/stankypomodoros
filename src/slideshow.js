import React from 'react';
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';


const Slideshow = (props) => {
  let topMovies = props.topRated.map((movie, index) => {
    let style = {
      backgroundImage: `url(${movie.backdrop_path})`
    }

    return (
      <div style={style} className={'each-slide'} key={movie.id}>
          <h2>{movie.title}</h2>
          <button className='movie-id' id={movie.id}><Link onClick={props.toggleHighlighted} to={`/movie/${movie.id}`}>View Info</Link></button>
      </div>
    )
  });
  return (
    <div>
      <Slide className='slideshow'>
        {topMovies}
      </Slide>
    </div>
  )
}

export default Slideshow;
