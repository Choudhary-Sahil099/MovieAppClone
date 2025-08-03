import React from 'react';
import magnifyIcon from '../assets/Magnify.svg'
const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src={magnifyIcon} alt="search"/>
            <input 
                type='text'
                placeholder='Search Movie...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
