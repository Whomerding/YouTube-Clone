import React from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom'

const SearchResults = ({videos}) => {

 
    return ( 
        <div className= "search-output">
        {videos.map((el) => (
            <div key = {el.id.videoId}>
                <h3>{el.snippet.title}</h3>
                <div>
                <Link to={`/details-page/${el.id.videoId}`}><img  src = {el.snippet.thumbnails.high.url} alt = "thumbnail of search video"/></Link>
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