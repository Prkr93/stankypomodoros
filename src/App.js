import React, { Component } from 'react';
import Modal from 'react-modal';
import './css/style.css';
import Header from './header';
import MainContent from './mainContent';
import Nav from './nav';
import Footer from './footer';
import SingleMovieView from './singleMovieView';
import movieData from './data/test-data';
import {getFetchData} from './apiCalls'
getFetchData()

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

  toggleHighlighted = (e) => {
    if (this.state.selectedMovie) {
      this.setState({selectedMovie: false})
    } else {
      let highlightedMovie = this.state.movies.find(movie => movie.id == e.target.id);
      this.setState({ selectedMovie: highlightedMovie })
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
