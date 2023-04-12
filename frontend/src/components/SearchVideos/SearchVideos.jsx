import React from 'react';

export default function SearchVideos({setSearchTerm, searchTerm, getVideos }){
    const handleClick = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
        getVideos(searchTerm)
      };
      
    return ( 
        <div>
            <form> 
            <input placeholder = "Search Videos" type="text"/>
            <button onClick ={handleClick}>Search</button>
            </form>
        </div>
     );
}
