import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useParams } from 'react-router-dom';
import CommentMapper from '../../components/CommentMapper/CommentMapper';
import axios from 'axios';
import PostComment from '../../components/PostComment/PostComment';



const HomePage = () => {

  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  

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
      <PostComment realVideoId={realVideoId} getAllComments = {getAllComments}/>
      <CommentMapper realVideoId={realVideoId} comments={comments}/>
      </div>
   );
}




//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>Home Page for {user.username}!</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div>
//   );
// };

export default HomePage;