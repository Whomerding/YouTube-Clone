import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Comments() {
    const [comments, setComments] = useState([])

    useEffect(()=>{
        getAllComments();
    }, []);
    async function getAllComments(videoId){
              const response = await axios.get(`http://127.0.0.1:8000/api/comment/${videoId}`);
              setComments(response.data);
              console.log (comments)
          };
    return (
        <div>
        {comments.map((el)=>(
            <div>
            <li key={el.id}>
                {el.text}
            </li>
            <li>
                {el.user_id__first_name}
            </li>
            </div>
        ))
        } 
      </div>
     )};

export default Comments;
// function App() {
//     const [searchTerm, setSearchTerm] = useState("")
//     const [songs, setSongs] = useState([]) 
    
//     useEffect(()=> {
//       getAllSongs();
//     }, []);
  
//     async function getAllSongs(){
//       const response = await axios.get('http://127.0.0.1:8000/api/music/');
//       setSongs(response.data);
//       console.log (songs)
//   }
//     return (
//       <div className="page">
//       <NavigationBar/>
//         <div class = "container">
//           <div class = "row">
//             <div class = "col-4">
//               <AddMusic getAllSongs={getAllSongs}/>
//             </div>
//             <div class = "col-8">
//               <SearchMusic setSearchTerm={setSearchTerm} setToggle={setToggle} toggle={toggle} searchTerm={searchTerm}/>
//               <TableDisplay songs={songs} searchTerm={searchTerm} getAllSongs={getAllSongs}/>
//             </div>  
//         </div>
//         <div class = "row">
//         </div>
//     </div>
//     </div>
//   );
//   }
  
//   export default App;