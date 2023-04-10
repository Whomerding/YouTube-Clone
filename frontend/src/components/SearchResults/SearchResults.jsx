import React from 'react';

const SearchResults = ({videos}) => {
    return ( 
        <div class = "search-output">
        {videos.map((el) => (
            <div>
                <h3>{el.snippet.title}</h3>
                <div>
                <img src = {el.snippet.thumbnails.high.url} alt = "thumbnail of search video"></img> 
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