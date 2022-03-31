import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

let timer;

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: []
    }
  }

  componentDidMount() {
    timer = setTimeout(() => {
      this.changeSlide(1)
    }, 5000)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.topRated !== this.props.topRated) {
      this.setState({topRated: this.props.topRated});
    }
  }



  changeSlide = (index, clicked) => {
    let currentSlide = document.querySelector(`[class^='slide-'].active`);
    let nextSlide = document.querySelector(`.slide-${index}`);
    let currentTick = document.querySelector(`[class^='tick-'].active`);
    let nextTick = document.querySelector(`.tick-${index}`);
    currentTick.classList.toggle('active');
    nextTick.classList.toggle('active');
    nextSlide.classList.toggle('active');
    currentSlide.classList.toggle('fade');
    setTimeout(() => {
      currentSlide.classList.toggle('active');
      currentSlide.classList.toggle('fade');
    }, 500)
    if (clicked) {
      clearTimeout(timer);
    }
    if (index > 3) {
      index = 0;
    } else {
      index++;
    }
    timer = setTimeout(() => {
      this.changeSlide(index)
    }, 5000);
  }

  render() {
    let topMovies = this.state.topRated.map((movie, index) => {
      let style = {
        backgroundImage: `url(${movie.backdrop_path})`
      }
      return (
        <article className={(index === 0 ? `slide-${index} active` : `slide-${index}`)} style={style} key={movie.id}>
          <h2>{movie.title}</h2>
          <button><NavLink to='/movies/:id'>View Info</NavLink></button>
        </article>
      )
    });
    return (
      <section className='slideshow'>
        <section className='slider'>{topMovies}</section>
        <section className='ticker'>
          <div className='tick-0 active' onClick={() => {this.changeSlide(0, true)}}></div>
          <div className='tick-1' onClick={() => {this.changeSlide(1, true)}}></div>
          <div className='tick-2' onClick={() => {this.changeSlide(2, true)}}></div>
          <div className='tick-3' onClick={() => {this.changeSlide(3, true)}}></div>
          <div className='tick-4' onClick={() => {this.changeSlide(4, true)}}></div>
        </section>
      </section>
    )
  }
}

export default Slideshow;
