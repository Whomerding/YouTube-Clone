import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const SearchResults = ({videos}) => {
    // const navigate = useNavigate();

    
    function handleClick (event) {
        event.preventDefault ();
        
    }

    return ( 
        <div style={{display: 'flex', flexWrap: 'wrap', width: '93%', justifyContent: 'space-between', margin: 'auto'}}>
            {videos.map((el) => (
                <div key = {el.id.videoId} style={{width: '340px', textAlign: "center"}}>
                    <h3 className='video-title' style={{height: '5REM'}}>{el.snippet.title}</h3>
                    <div>
                    <Link to={`/details-page/${el.id.videoId}`}><img src = {el.snippet.thumbnails.medium.url} alt = "thumbnail of search video"/></Link>
                    </div>
                    <div>
                    <p style={{maxHeight: '6REM', overflow: 'scroll'}}>{el.snippet.description}</p>
                    </div>
                </div>
        ))}
        </div>
     );
}

export default SearchResults   ;
