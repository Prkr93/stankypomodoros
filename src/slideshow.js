import React from 'react';

const Slideshow = ({topRated}) => {

  let topMovies = topRated.map((movie, index) => {
    let style = {
      backgroundImage: `url(${movie.backdrop_path})`
    }
    return (
      <article className={(index === 0 ? 'active' : '')} style={style} key={movie.id}>
        <h2>{movie.title}</h2>
        <button>View Info</button>
      </article>
    )
  });

  return (
    <section className='slideshow'>
      <section className='slider'>{topMovies}</section>
      <section className='ticker'>
        <div className='tick-one active'></div>
        <div className='tick-two'></div>
        <div className='tick-three'></div>
        <div className='tick-four'></div>
        <div className='tick-five'></div>
      </section>
    </section>
  )
}

export default Slideshow;
