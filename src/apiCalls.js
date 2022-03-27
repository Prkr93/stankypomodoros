import React, { Component } from 'react';

const getFetchData = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => console.log(data.movies[0]))
}


export {getFetchData};
