import React from 'react';
const VideoPlayer = (videoId) => {
    return (
        <div>
        <iframe title = "youtubeplayer" id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        framborder="0"></iframe>
        ;
        </div>
)}
 
export default VideoPlayer;