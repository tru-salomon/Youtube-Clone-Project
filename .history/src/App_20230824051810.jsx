import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import { useState, useEffect } from "react"
import './App.css'
import NavBar from "./Components/NavBar/Nav.jsx"
import Cards from "./Components/Cards/Cards.jsx"
import Video from "./Components/Video/Video.jsx"
import ErrorPage from "./Components/ErrorPopup/ErrorPage.jsx"
import SearchBar from "./Components/Search/SearchBar.jsx"
import About from "./Components/AboutPage/About.jsx"



const YT_API_KEY = import.meta.env.VITE_APP_API_KEY
const YT_API_ENDPOINT = `https://www.googleapis.com/youtube/v3/search`;

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
    fetch(`${YT_API_ENDPOINT}?part=snippet&maxResults=10&q=${searchTerm}&key=${YT_API_KEY}`)

      .then(response => response.json())
      .then(data => setSearchResults(data.items))
      .catch(error => console.error("Uh-oh! The search results could not be fetched", error));
    }
  }, [searchTerm])

  return (
    <div className="App">
      <Router>
        <NavBar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Cards videos={searchResults} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/videos/:videoID" element={<Video />} />
          <Route path="/search/:searchBar" element={<SearchBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

