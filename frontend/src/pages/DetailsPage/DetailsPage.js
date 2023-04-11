import React, { useState, useEffect } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useParams } from 'react-router-dom';
import CommentMapper from '../../components/CommentMapper/CommentMapper';
import axios from 'axios';
import PostComment from '../../components/PostComment/PostComment';


const DetailsPage = () => {
    // const {videoId} = useParams();
    const [comments, setComments] = useState([])
    const [realVideoId, setrealVideoId] = useState('0sMtoedWaf0')
    
     useEffect(()=>{
        getAllComments();
    }, []);

    async function getAllComments(){
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/comment/${realVideoId}/`);
            setComments(response.data);
         
            
        } catch (error) {
            console.log (error)
        }
          }

    return (
        <div>
        <VideoPlayer realVideoId={realVideoId}/>
        <PostComment realVideoId={realVideoId} getAllComments ={getAllComments}/>
        <CommentMapper realVideoId={realVideoId} comments={comments}/>
        </div>
        //create comment form component(takes realVideoId)
        // import and rename comments to comment mapper
                //  create a comment presenter 
     );
}

export default DetailsPage;