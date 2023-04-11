import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import {useParams} from 'react-router-dom'

const DetailsPage = () => {
    const {videoId} = useParams();
    return ( 
        <VideoPlayer videoId={videoId} />
     );
}
 
export default DetailsPage;