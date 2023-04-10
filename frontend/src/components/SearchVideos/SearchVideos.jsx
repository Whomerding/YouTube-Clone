import React from 'react';

export default function SearchVideos({setSearchTerm, searchTerm}){

    
    return ( 
        <div>
            <form> 
            <input placeholder = "Search Videos" type="text" value = {searchTerm} onChange= {event=> setSearchTerm(event.target.value)}/>
            </form>
        </div>
     );
}
