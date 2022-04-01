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
import {Route, NavLink} from 'react-router-dom';


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
       this.setState({ movies: data[0].movies });
       (data[1] && this.getHighlighted(data[1]))
    })
  }

  componentDidMount() {
    const moviePath = window.location.href;
    const movieId = moviePath.slice(moviePath.length -6)
    if (movieId > 0) {
      this.setState({selectedMovie: movieId})
      passData(movieId)
    }
    this.fetchData();
  }

  getHighlighted(singleData) {
    this.setState({ selectedMovie: singleData.movie });
  }

  toggleHighlighted = (e) => {

    if (this.state.selectedMovie) {
      this.setState({selectedMovie: false})
    } else {

      let highlightedMovie = this.state.movies.find(movie => movie.id == e.target.id);
      passData(e.target.id);
      this.fetchData();
    }
  }

  render() {
    return (
      <div className='app' >
        <Header toggleHighlighted={this.toggleHighlighted} />
        <Route exact path='/' render={() =>
          <MainContent
            movieRepo={this.state.movies}
            filterOption={this.state.filterOption}
            toggleHighlighted={this.toggleHighlighted}
          />
        } />
        <Route path='/movie/:id' render={() =>
          <SingleMovieView
            selectedMovie={this.state.selectedMovie}
            toggleHighlighted={this.toggleHighlighted}
          />
        } />
        <Nav />
        <Footer />
      </div>
    )
  }
}

export default App;
