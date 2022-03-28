import React, { Component } from 'react';
import Modal from 'react-modal';
import './css/style.css';
import Header from './header';
import MainContent from './mainContent';
import Nav from './nav';
import Footer from './footer';
import SingleMovieView from './singleMovieView';
import movieData from './data/test-data';
import {movieDatabase, singleMovieData, passData} from './apiCalls'
// console.log('mdb', movieDatabase)



class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filterOption: 'bangersToStankers',
      selectedMovie: false,
    }
  }

  fetchData() {
    Promise.all([movieDatabase, singleMovieData]).then(data => {
       this.getMovies(data[0].movies)
       (data[1] && this.getHighlighted(data[1]))
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  getMovies(movieDB) {
    this.setState({ movies: movieDB });
    //console.log(singleData.movie)
  }

  getHighlighted(singleData) {
    this.setState({ selectedMovie: singleData.movie });
  }

  toggleHighlighted = (e) => {

    if (this.state.selectedMovie) {
      this.setState({selectedMovie: false})
    } else {

      let highlightedMovie = this.state.movies.find(movie => movie.id == e.target.id);
      passData(e.target.id)
      this.fetchData()

      //this.setState({ selectedMovie: highlightedMovie })
    }
  }

  render() {
    return (
      <div className='app' >
        <Header />
        {this.state.movies.length && !this.state.selectedMovie &&
          <MainContent
            movieRepo={this.state.movies}
            filterOption={this.state.filterOption}
            toggleHighlighted={this.toggleHighlighted}
          />
        }
        {this.state.selectedMovie &&
          <SingleMovieView
            selectedMovie={this.state.selectedMovie}
            toggleHighlighted={this.toggleHighlighted}
          />
        }
        <Nav />
        <Footer />
      </div>
    )
  }
}

export default App;
