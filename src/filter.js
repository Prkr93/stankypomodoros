import React from 'react';
import SearchBar from './searchBar';

const Filter = ({movieRepo, changeFilter, searchThroughMovies}) => {

  const toggleFilterChange = (e) => {
    changeFilter(e)
  }

  return (
    <section className='filter'>
      <article className='filter-options'>
        <label htmlFor="filters">Filter: </label>
        <select onChange={toggleFilterChange} name="filters" id="filters">
          <option value="bangersToStankers">Bangers To Stankers</option>
          <option value="stankersToBangers">Stankers To Bangers</option>
          <option value="aToZ">A to Z</option>
          <option value="zToA">Z to A</option>
        </select>
      </article>
      <SearchBar movieRepo={movieRepo} searchThroughMovies={searchThroughMovies} />
    </section>
  )
}

export default Filter;
