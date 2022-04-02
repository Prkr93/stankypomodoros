import React, { Component } from 'react';
import './css/style.css';
import Header from './header';
import MainContent from './mainContent';
import Nav from './nav';
import Footer from './footer';
import SingleMovieView from './singleMovieView';
import movieData from './data/test-data';
import {movieDatabase, singleMovieData, passData, singleVideoData} from './apiCalls'
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filterOption: 'bangersToStankers',
      selectedMovie: false,
      selectedVideos: false,
      filteredMovies: []
    }
  }

  fetchData() {
    Promise.all([movieDatabase, singleMovieData, singleVideoData]).then(data => {
       this.setState({ movies: data[0].movies });
       this.setState({ filteredMovies: data[0].movies });
       (data[1] && this.setState({ selectedMovie: data[1].movie }));
       (data[2] && this.getHighlightedVideo(data[2]))

    })
  }
  componentDidMount() {
    const moviePath = window.location.href;
    const movieId = moviePath.slice(moviePath.length - 6)
    if (movieId > 0) {
      this.setState({selectedMovie: movieId})
      passData(movieId)
    }
    this.fetchData();
  }

  changeFilter = (e) => {
    this.setState({filterOption: e.target.value })
  }

  getHighlightedVideo(videoData) {
    let videoKeys = videoData.videos.map(video => video.key)
    let videos = `https://www.youtube.com/watch?v=${videoKeys[0]}`
    this.setState({ selectedVideos: videos });
  }


  toggleHighlighted = (e) => {
    if (this.state.selectedMovie) {
      this.setState({selectedMovie: false, selectedVideos: false})
    } else {
      let highlightedMovie = this.state.movies.find(movie => movie.id == e.target.id);
      passData(e.target.id);
      this.fetchData();
    }
  }

  searchThroughMovies = (moviesToDisplay) => {
    this.setState({filteredMovies: moviesToDisplay});
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
            changeFilter={this.changeFilter}
            filteredMovies={this.state.filteredMovies}
            searchThroughMovies={this.searchThroughMovies}
          />
        } />
        <Route path='/movie/:id' render={() =>
          <SingleMovieView
            selectedMovie={this.state.selectedMovie}
            toggleHighlighted={this.toggleHighlighted}
            selectedVideos={this.state.selectedVideos}
          />
        } />
        <Nav />
        <Footer />
      </div>
    )
  }
}

export default App;
