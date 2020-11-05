import React from 'react';

const Search = ({ handleChange, handleSubmit, handleCategory }) => (
  <form onChange={(e) => handleChange(e)}>
    <label>
      What are you looking for?
      <select onChange={handleCategory}>
      <option value="category2">Place</option>
      <option value="date">Year</option>
      <option value="lang">Language</option>
      </select>
      <br />
    </label>
    <input type="text"></input>
    <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
  </form>
);

export default Search;
