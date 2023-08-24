import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import { useState, useEffect } from "react"
import './App.css'
import NavBar from "./Components/NavBar/Nav.jsx"
import Cards from "./Components/Cards/Cards.jsx"
import Video from "./components/Video/Video.jsx"
import ErrorPage from "./Components/ErrorPopup/ErrorPage.jsx"
import SearchBar from "./Components/Search/SearchBar.jsx"
import About from "./Components/AboutPage/About.jsx"



const YT_API_KEY = import.meta.env.VITE_APP_API_KEY
const YT_API_ENDPOINT = `https://www.googleapis.com/youtube/v3/search`;

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
    fetch(`${YT_API_ENDPOINT}?part=snippet&maxResults=10&q=${searchTerm}&key=${YT_API_KEY}`)

      .then(response => response.json())
      .then(data => console.log(data))
    }
  }, [searchTerm])

  return (
    <div className="App">
      <Router>
        <NavBar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/videos/:videoID" element={<Video />}></Route>
          <Route path="/search/:searchBar" element={<SearchBar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

