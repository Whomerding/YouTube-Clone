import React from 'react';
import "./SearchVideos.css"
export default function SearchVideos({setSearchTerm, searchTerm, getVideos}){
    const handleClick = (event) => {
        event.preventDefault();
        getVideos (searchTerm)
      };
      
    return ( 
        <div className="search-bar">
            <form className='search-form' onSubmit={handleClick}> 
            <div>
            <input placeholder = "Search Videos" type="text" value = {searchTerm} onChange = {event => setSearchTerm(event.target.value)} />
            <button type='submit' className="button-search">Search</button>
            </div>
            </form>
        </div>
     );
}
