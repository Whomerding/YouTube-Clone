import React from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom'
import './SearchResults.css'

const SearchResults = ({videos}) => {

 
    return ( 
        <div className='grid-container'>
            {videos.map((el) => (
                <div key = {el.id.videoId} className="grid-item">
                    <h3 className='video-title'>{el.snippet.title}</h3>
                    <div>
                    <Link to={`/details-page/${el.snippet.title}/${el.snippet.description}/${el.id.videoId}`}><img  src = {el.snippet.thumbnails.medium.url} alt = "thumbnail of search video"/></Link>
                    </div>
                    <div>
                    <p>{el.snippet.description}</p>
                    </div>
                </div>
        ))}
        </div>
     );
}
 
export default SearchResults   ;