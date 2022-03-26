import React, { Component } from 'react';
import Modal from 'react-modal';
import './css/style.css';
import Header from './header';
import MainContent from './mainContent';
import Nav from './nav';
import Footer from './footer';
import SingleMovieView from './singleMovieView';
import movieData from './data/test-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filterOption: 'bangersToStankers',
      selectedMovie: false,
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.setState({ movies: movieData.movies });
  }

  // toggleSingleView() {
  //     this.state.selectedMovie ? selectMovie() : hideSingleView();
  // }

  selectMovie = (e) => {
    let highlightedMovie = this.state.movies.find(movie => movie.id == e.target.id);
    this.setState({ selectedMovie: highlightedMovie })
  }

  render() {
    return (
      <div className='app' onClick={this.selectMovie}>
        <Header />
        {this.state.movies.length &&
          <MainContent
            movieRepo={this.state.movies}
            filterOption={this.state.filterOption}
          />
        }
        {this.state.selectedMovie &&
          <SingleMovieView selectedMovie={this.state.selectedMovie} />
        }
        <Nav />
        <Footer />
      </div>
    )
  }
}

export default App;
