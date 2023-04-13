import React from 'react';
import {Link} from 'react-router-dom'
import './SearchResults.css'

const SearchResults = ({videos}, {setVideo}) => {

    return ( 
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {videos.map((el) => (
                <div key = {el.id.videoId} style={{flex: 1, textAlign: "center"}}>
                    <h3 className='video-title' style={{height: '5REM'}}>{el.snippet.title}</h3>
                    <div>
                    <Link to={`/details-page/${el.snippet.title}/${el.id.videoId}`}><img src = {el.snippet.thumbnails.medium.url} alt = "thumbnail of search video"/></Link>
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
