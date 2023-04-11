import React from 'react';
const VideoPlayer = (video) => {
    return (
        <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${video.id}`}
        framborder="0"></iframe>
        ;
        </div>
)}
 
export default VideoPlayer;