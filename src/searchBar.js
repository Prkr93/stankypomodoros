import React from 'react';

const SearchBar = ({movieRepo, searchThroughMovies}) => {

  const filterBySearchBar = (e) => {
    console.log(e.target.value)

    const moviesToDisplay = movieRepo.filter(movie => {
      let searchTerm = e.target.value.toUpperCase();
      let absTitle = movie.title.toUpperCase()

      if (absTitle.includes(searchTerm)) {
        return movie
      }
    });

    console.log(moviesToDisplay)
    searchThroughMovies(moviesToDisplay)
  }

  return (
    <article>
      <label htmlFor='search-bar'></label>
      <input type='text' placeholder={`Type a movie's Name`} name='search-bar' id='search-bar' onKeyUp={filterBySearchBar} />
    </article>
  )
}

export default SearchBar;
