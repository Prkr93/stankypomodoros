import React from 'react';

const SearchBar = ({movieRepo}) => {

  const filterBySearchBar = (e) => {
    console.log(typeof e.target.value)

    const filteredMovies = movieRepo.filter(movie => {

      console.log(movie)
      let searchTerm = e.target.value.toUpperCase();
      let absTitle = movie.title.toUpperCase()
      console.log(searchTerm)
      if (movie.title.includes(searchTerm)) {
        console.log(searchTerm, absTitle)
        return movie
      }
    });
    console.log(filteredMovies)
  }

  return (
    <article>
      <label htmlFor='search-bar'></label>
      <input type='text' placeholder={`Type a movie's Name`} name='search-bar' id='search-bar' onKeyUp={filterBySearchBar} />
    </article>
  )
}

export default SearchBar;
