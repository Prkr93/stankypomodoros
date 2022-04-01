import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';


let timer;

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: []
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.topRated !== this.props.topRated) {
      this.setState({topRated: this.props.topRated});
    }
  }

  render() {
    let topMovies = this.state.topRated.map((movie, index) => {
      let style = {
        backgroundImage: `url(${movie.backdrop_path})`
      }
      console.log(style)
      return (
        <div style={style} className={(index === 0 ? `each-slide slide-${index} active` : `each-slide slide-${index}`)} key={movie.id}>

            <h2>{movie.title}</h2>
            <button><Link id={movie.id} to={`/movie/${movie.id}`}>View Info</Link></button>

        </div>
      )
    });
    return (
      <div>
        <Slide className='rtl slideshow'>
          {topMovies}
        </Slide>
      </div>
    )
  }
}

// <section className='ticker'>
//   <div className='tick-0 active' onClick={() => {this.changeSlide(0, true)}}></div>
//   <div className='tick-1' onClick={() => {this.changeSlide(1, true)}}></div>
//   <div className='tick-2' onClick={() => {this.changeSlide(2, true)}}></div>
//   <div className='tick-3' onClick={() => {this.changeSlide(3, true)}}></div>
//   <div className='tick-4' onClick={() => {this.changeSlide(4, true)}}></div>
// </section>

export default Slideshow;
