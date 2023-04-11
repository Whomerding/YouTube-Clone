// General Imports
import React from 'react';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchVideos from '../../components/SearchVideos/SearchVideos';



function LandingPage({videos, searchTerm, setSearchTerm}) {

    return (
      <div>
        <SearchVideos setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        <SearchResults videos = {videos}  searchTerm = {searchTerm}/>
      </div>
    );
  }
  
  export default LandingPage;
  