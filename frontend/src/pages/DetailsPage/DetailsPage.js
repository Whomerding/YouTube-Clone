import React, { useState, useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useParams } from "react-router-dom";
import CommentMapper from "../../components/CommentMapper/CommentMapper";
import axios from "axios";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import "./DetailsPage.css";
import PostComment from "../../components/PostComment/PostComment";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { KEY } from "../../localKey";

const DetailsPage = () => {
  const [user, token] = useAuth();
  const {realVideoId} = useParams();
  const [comments, setComments] = useState([]);
  const  [singleVideo, setSingleVideo] = useState({
    "kind": "youtube#video",
    "etag": "CaUyMjVDBCA6dS5ldtla6ZrO4q4",
    "id": "3L5ZjdIgTmU",
    "snippet": {
        "publishedAt": "2023-03-31T16:27:33Z",
        "channelId": "UCx46mDniih3SxOObkibtQ2w",
        "title": "Flex Workshop - Advanced React: Making a Recipe App",
        "description": "Dan Tulpa walks through building out a React application that consumes a 3rd party API to fetch and display recipe information!",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/3L5ZjdIgTmU/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/3L5ZjdIgTmU/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/3L5ZjdIgTmU/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/3L5ZjdIgTmU/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            "maxres": {
                "url": "https://i.ytimg.com/vi/3L5ZjdIgTmU/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            }
        },
        "channelTitle": "devCodeCamp",
        "tags": [
            "coding",
            "code",
            "coder",
            "course",
            "class",
            "full stack",
            "junior dev",
            "junior developer",
            "coding bootcamp",
            "learn code",
            "code camp",
            "dev",
            "school",
            "higher education",
            "learn to code",
            "remote",
            "learn",
            "remote coding"
        ],
        "categoryId": "28",
        "liveBroadcastContent": "none",
        "localized": {
            "title": "Flex Workshop - Advanced React: Making a Recipe App",
            "description": "Dan Tulpa walks through building out a React application that consumes a 3rd party API to fetch and display recipe information!"
        }
      }
    });
    


  async function getAllComments() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/comment/${realVideoId}/`
      );
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  }
async function getVideoById() {
  try {
    const response = await axios.get (
    `https://www.googleapis.com/youtube/v3/videos?id=${realVideoId}&key=${KEY}&part=snippet`
    )
    setSingleVideo(response.data.items[0])
  } catch (error) {
    
  }
}
  useEffect(() => {
    getVideoById()
    getAllComments();
  }, [realVideoId]);

  return (
    <div className="details-page">
      <div className="a" style={{ textAlign: "center", paddingRight: "2REM" }}>
        <VideoPlayer realVideoId={realVideoId} />
        <h1>{singleVideo.snippet.title}</h1>
        <p style={{maxHeight: '10REM', overflow: 'scroll'}}>{singleVideo.snippet.description}</p>
        {token ? (
          <PostComment
            getAllComments={getAllComments}
            realVideoId={realVideoId}
          />
        ) : (
          <h2>***Please Log in to make a comment***</h2>
        )}
        <CommentMapper
          realVideoId={realVideoId}
          comments={comments}
        />
      </div>

      <div className="b">
        <RelatedVideos realVideoId={realVideoId} />
      </div>
    </div>
  );
};

export default DetailsPage;
