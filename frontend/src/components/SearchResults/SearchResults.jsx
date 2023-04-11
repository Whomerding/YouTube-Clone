import React from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom'

const SearchResults = ({videos}) => {

    const handleClick = (prop) => {
        debugger
        <link to={`/details-page/${prop}`}>Video Details</link>
    }
    return ( 
        <div className= "search-output">
        {videos.map((el) => (
            <div key = {el.id.videoId}>
                <h3>{el.snippet.title}</h3>
                <div>
                <img  src = {el.snippet.thumbnails.high.url} alt = "thumbnail of search video"  onClick={()=>handleClick(el.id.videoId)}/>
                <div>
                <p>{el.snippet.description}</p>
                </div>
                </div>
            </div>
        ))}
        </div>
     );
}
 
export default SearchResults   ;