import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import { useState, useEffect } from "react"
import './App.css'
import NavBar from "./Components/NavBar/Nav.jsx"
import Cards from "./Components/Cards/Cards.jsx"
import Video from "./Components/Video/Video.jsx"
import SearchBar from "./Components/Search/SearchBar";
import ErrorPage from "./Components/ErrorPopup/ErrorPage.jsx"
import About from "./Components/AboutPage/About.jsx"


const YT_API_KEY = import.meta.env.VITE_APP_API_KEY
const YT_API_ENDPOINT = `https://www.googleapis.com/youtube/v3/search`;


export default function App() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let endpoint = searchTerm
      ? `${YT_API_ENDPOINT}?part=snippet&maxResults=20&q=${searchTerm}&regionCode=US&relevanceLanguage=en&order=rating&type=video&key=${YT_API_KEY}`
      : `${YT_API_ENDPOINT}?part=snippet&order=rating&regionCode=US&maxResults=50&type=video&relevanceLanguage=en&key=${YT_API_KEY}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => {
        console.error("Uh-oh! The search results could not be fetched", error);
      });
  }, [searchTerm]);

  return (
    <div className="App">
      <Router>
        <NavBar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Cards videos={videos} />} />
          <Route
            path="/search/:searchTerm"
            element={<Cards videos={videos} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/videos/:videoId" element={<Video />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}