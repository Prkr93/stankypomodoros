import React from 'react';

const Filter = ({changeFilter}) => {

const toggleFilterChange = (e) => {
  changeFilter(e.target)
}

  return (
    <section>
    <label for="filters">Filter:</label>
<select onChange={toggleFilterChange} name="filters" id="filters">
<option value="bangersToStankers">Bangers To Stankers</option>
<option value="stankersToBangers">Stankers To Bangers</option>
<option value="aToZ">A to Z</option>
<option value="zToA">Z to A</option>
</select>
    </section>
  )
}

export default Filter;
