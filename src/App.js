import React, { Component } from 'react';

import './css/style.css';
import Header from './header';
import MainContent from './mainContent';
import Nav from './nav';
import Footer from './footer';
import movieData from './data/test-data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <MainContent />
        <Nav />
        <Footer />
        <h1>Hello!!!</h1>
      </div>
    )
  }

}

export default App;
