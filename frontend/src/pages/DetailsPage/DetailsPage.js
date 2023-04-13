import React, { useState, useEffect } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useParams } from 'react-router-dom';
import CommentMapper from '../../components/CommentMapper/CommentMapper';
import axios from 'axios';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import './DetailsPage.css'
import PostComment from '../../components/PostComment/PostComment';
import useAuth from "../../hooks/useAuth";

const DetailsPage = ({video}) => {
    const [user, token] = useAuth (); 
    const {realVideoId, title, description} = useParams();
    const [comments, setComments] = useState([])
    
     useEffect(()=>{
        getAllComments();
    }, []);
    console.log (video)
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
            <div className='video-player'>
            <h1>{title}</h1>    
            <VideoPlayer realVideoId={realVideoId}/>
            <p>{description}</p>
            
        {token? <PostComment getAllComments={getAllComments} realVideoId = {realVideoId}/>:<h2>***Please Log in to make a comment***</h2> }
        </div>
        <CommentMapper realVideoId={realVideoId} comments={comments}/>
            <div className = "related-videos">
            <RelatedVideos realVideoId={realVideoId}/>
            </div>
        </div>
     );
}

export default DetailsPage;