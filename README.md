# Stanky Pomodoros

## About
Rancid Tomatillos is a site that lets users browse movies, and view fun details about each one such as tagline, budget, a plot summary, and user community ratings. It's designed for a fluid and accessible experience for users of varying levels of ability and internet literacy. It's currently deployed here.


## Technologies
This app is built in React using the create-react-app boilerplate. It also uses...

-react-router-dom

-react-player

-

-

-node-sass

-fetch api

-cypress

## Installation
Stanky Pomodoros is deployed here if you'd like to view it in your browser. You can also run it locally if you'd like.

To install this app:

`git clone git@github.com:Prkr93/stankypomodoros.git`


`cd <<path>>`


`npm i`


Once all the dependancies are installed run `npm start` and the site should be accessible at http://localhost:3000/.

## Features
Upon page load the site will fetch a list of movies and display a grid of single movie cards as well as a slideshow featuring the current top 5 rated movies in the database. The user can click a poster to see a more detailed page including a plot overview, budget, as well as an associated video.

The user can also enter text into a search bar to filter the movies by title, or choose to sort the movies by rating, alphabetically from A-Z or vice versa.

As a users types each character into the search bar, it instantly updates the results with each keystroke.

Rancid Tomatillos is completely responsive across all breakpoints, and is designed to work well on mobile.

## Testing
We use cypress for end to end and integration testing. In order to test the site run npm run cypress and you should be brought to a testing suite.

## Future Iterations


## Contributors
This app was a paired project by Dillon Parker and Jerry Vohrer for Module 3 of the Front End Engineering Program at the Turing School of Software and Design.
