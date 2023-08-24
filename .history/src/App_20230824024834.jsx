import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import './App.css'
import NavBar from "./Components/NavBar/Nav.jsx"
import Cards from "./Components/Cards/Cards.jsx"
import Video from "./Components/Video/Video.jsx"
import ErrorPage from "./Components/ErrorPopup/ErrorPage.jsx"
import SearchBar from "./Components/Search/SearchBar.jsx"
import About from "./Components/AboutPage/About.jsx"
// import Card from "./Components/Card/Card.jsx"


 const YT_API_KEY = import.meta.env.VITE_APP_API_KEY
 const YT_API_ENDPOINT= `https://www.googleapis.com/youtube/v3/search`;

function App() {

const [searchTerm, setSearchTerm] = useState("");

useEffect(()=>{
  fetch(`${YT_API_ENDPOINT}?part=snippet&maxResults=10&q=${query}&key=${YT_API_KEY}`)
    
   .then(response =>response.json())
    .then(data => console.log(data))
},[])

const handleSearch = (query) => {
  setSearchTerm(query);
};

  return (  
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/videos/:videoID" element={<Video />}></Route>
          <Route path="/search/:searchBar" element={<SearchBar />}></Route>
        </Routes>
      </Router>    
    </div>
  );
}

export default App;

