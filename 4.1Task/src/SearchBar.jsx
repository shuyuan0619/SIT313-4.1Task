import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <div className='form'>
      <div className='form_name'>DEV@Deakin</div>
      <div className='form_search'>
        <button className='icon'>
          <AiOutlineSearch size={30} />
        </button>
        <input className='search' type='text' placeholder='Search for something'></input>
      </div>
      <button className='botton'>Post</button>
      <button className='botton'>Login</button>
    </div>
  );
}
export default SearchBar;
