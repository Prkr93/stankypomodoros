import React, { Component } from 'react';

import './css/style.css';
import Header from './header';
import MainContent from './mainContent';
import Nav from './nav';
import Footer from './footer';
import movieData from './data/test-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.getMovies();
  }



  getMovies() {
    this.setState({ movies: movieData.movies });
  }

  render() {
    return (
      <div className='app'>
        <Header />
        {this.state.movies.length && <MainContent movieRepo={this.state.movies} />}
        <Nav />
        <Footer />
      </div>
    )
  }

}

export default App;
