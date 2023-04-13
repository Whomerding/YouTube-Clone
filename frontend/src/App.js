// General Imports
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { KEY } from './localKey';
import axios from 'axios';


// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import LandingPage from './pages/LandingPage/LandingPage';

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [videos, setVideos] = useState([]) 
  const [video, setVideo] = useState([])
  
  useEffect(()=> {
    let mounted = true;
    if(mounted) {
      getVideos('python django explained in 8 minutes');
    }
    return () => mounted = false;
  }, []);



  async function getVideos(searchTerm){
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=9`)
    setVideos (response.data.items);
  }
  console.log(videos)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path = "/" element = {<LandingPage searchTerm={searchTerm} videos={videos} setVideo = {setVideo} setSearchTerm={setSearchTerm} getVideos = {getVideos}/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details-page/:title/:realVideoId" element = {<DetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
