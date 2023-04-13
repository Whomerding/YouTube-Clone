import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';
import { KEY } from '../../localKey';
import './RelatedVideos.css'
function RelatedVideos({realVideoId}) {
    const [relatedVideos, setRelatedVideos] = useState([]) 
    useEffect(()=> {
        let mounted = true;
        if(mounted) {
          getRelatedVideos();
        }
        return () => mounted = false;
      }, []);
    
    
      async function getRelatedVideos(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${realVideoId}&key=${KEY}&type=video&part=snippet`)
        setRelatedVideos (response.data.items);
      }
      console.log (relatedVideos)
    return ( 
        <div className='related-videos'>
        <SearchResults videos = {relatedVideos}/>
        </div>
     );
}

export default RelatedVideos;