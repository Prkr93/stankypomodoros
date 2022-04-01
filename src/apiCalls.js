import React, { Component } from 'react';

const getData = (fetchUrl) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${fetchUrl}`)
  .then(response => response.json())
  .catch(error => {
    const main = document.querySelector('main')
    main.innerHTML = error.message
  })
}
let singleMovieData;
let singleVideoData;
const movieDatabase = getData('movies')

const passData = (id) => {
  singleMovieData = getData(`movies/${id}`)
  singleVideoData = getData(`movies/${id}/videos`)
}

export {movieDatabase, singleMovieData, passData, singleVideoData};
