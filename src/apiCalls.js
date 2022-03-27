import React, { Component } from 'react';

const getData = (fetchUrl) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${fetchUrl}`)
  .then(response => response.json())
}

let movieDatabase = getData('movies')

console.log()
export {movieDatabase};
