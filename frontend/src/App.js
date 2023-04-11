// General Imports
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { KEY } from './localKey';
import axios from 'axios';
import { DATA } from './localData'

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchVideos from './components/SearchVideos/SearchVideos';
import SearchResults from './components/SearchResults/SearchResults';
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [videos, setVideos] = useState(DATA.items) 
  console.log (videos)
  useEffect(()=> {
    // getVideos('star trek');
  }, []);



  async function getVideos(searchTerm){
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`)
    setVideos (response.items);
    
  }

  return (
    <div>
      <Navbar />
      <SearchVideos setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <SearchResults videos = {videos}  searchTerm = {searchTerm}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details-page/:videoId/" element = {<DetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
