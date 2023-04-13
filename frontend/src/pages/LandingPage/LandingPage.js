// General Imports
import React from 'react';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchVideos from '../../components/SearchVideos/SearchVideos';



function LandingPage({videos, searchTerm, setSearchTerm, getVideos, setVideo}) {

    return (
      <div>
        <SearchVideos setSearchTerm={setSearchTerm} searchTerm={searchTerm} getVideos={getVideos}/>
        <div>
          <SearchResults videos = {videos} setVideo = {setVideo}/>
        </div>
      </div>
    );
  }
  
  export default LandingPage;
  