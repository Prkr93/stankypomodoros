# [Stanky Pomodoros](https://bent-quiver.surge.sh/)

## About
Rancid Tomatillos is a site that lets users browse movies, and view fun details about each one such as tagline, budget, a plot summary, and user community ratings. It's designed for a fluid and accessible experience for users of varying levels of ability and internet literacy.

## Technologies and Skills Used:

- React

- Cypress end-to-end testing

- Router

- Error handling

- Sassy CSS

- Fetch api

- React-Player - videos

- Responsive design

## Installation
Stanky Pomodoros is deployed [here](https://bent-quiver.surge.sh/) if you'd like to view it in your browser. You can also run it locally if you'd like by installing this app

###### In your terminal...

`git clone git@github.com:Prkr93/stankypomodoros.git`


`cd <<path>>`


`npm i`


Once all the dependancies are installed run `npm start` and the site should be accessible at http://localhost:3000/.

## Features
Upon page load the site will fetch a list of movies and display a grid of single movie cards as well as a slideshow featuring the current top 5 rated movies in the database. The user can click a poster to see a more detailed page including a plot overview, budget, as well as an associated video you can play right on the page.

![st-slideshow](https://user-images.githubusercontent.com/92649050/161654729-4a2824a8-d7b2-4fa2-b9f9-4a2a49fd0477.gif)

The user can also enter text into a search bar to filter the movies by title, or choose to sort the movies by rating, alphabetically from A-Z or vice versa.

![st-filter](https://user-images.githubusercontent.com/92649050/161654802-c4cadcda-d7e4-4b78-a50f-abffb6039d91.gif)

As a users types each character into the search bar, it instantly updates the results with each keystroke.

![sp-responsive](https://user-images.githubusercontent.com/92649050/161656209-9f7ceab9-5372-4594-9ce6-29db6ca0b520.gif)

Rancid Tomatillos is completely responsive across all breakpoints, and is designed to work well on mobile.

![sp-mobile](https://user-images.githubusercontent.com/92649050/161656257-56407db1-a3ed-4f87-8e4a-c7be81e59a36.gif)

## Testing
We use cypress for end to end and integration testing. In order to test the site run `npm run cypress` and you should be brought to a testing suite.

## Future Iterations

### UserProfile
- Add user profile and login
- Add Friends who also have accounts
- Rate films
- favorite movies or save them to a future watch list

### Add Friends
- Link with friends who also have accounts
- See their ratings, favorites and watch lists

### FilmFindr
- Swipe left or right to choose films that may or may not appeal to you at first glance
- Improve suggested films based on swipe history

### Matchmaker
- Find and suggest films to watch with friends based on swipes, favorites and watch lists

### Randomizer
- We call this one the relationship saver... Save time and avoid arguments about what to watch next. Let us choose for you.

## Contributors
This app was a paired project by [Dillon Parker](https://github.com/Prkr93) and [Jerry Vohrer](https://github.com/Jerry-Vrrr) for Module 3 of the Front End Engineering Program at the Turing School of Software and Design.
