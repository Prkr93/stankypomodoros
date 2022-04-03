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

// <section className='ticker'>
//   <div className='tick-0 active' onClick={() => {this.changeSlide(0, true)}}></div>
//   <div className='tick-1' onClick={() => {this.changeSlide(1, true)}}></div>
//   <div className='tick-2' onClick={() => {this.changeSlide(2, true)}}></div>
//   <div className='tick-3' onClick={() => {this.changeSlide(3, true)}}></div>
//   <div className='tick-4' onClick={() => {this.changeSlide(4, true)}}></div>
// </section>

export default Slideshow;
