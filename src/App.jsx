import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import {useEffect} from "react"
import './App.css'
import NavBar from "./Components/NavBar.jsx"
import Cards from "./Components/Cards.jsx"
import Video from "./Components/Video.jsx"
import ErrorPage from "./Components/ErrorPage.jsx"
import SearchResults from "./Components/SearchResults.jsx"
import About from "./Components/About.jsx"



 const YT_API_KEY = import.meta.env.VITE_APP_API_KEY
 const YT_API_ENDPOINT= `https://www.googleapis.com/youtube/v3/search`;

function App() {

useEffect(()=>{
  fetch(`${YT_API_ENDPOINT}?part=snippet&maxResults=10&q=${""}&key=${YT_API_KEY}`)
    
   .then(response =>response.json())
    .then(data => console.log(data))
},[])


  return (

  
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/videos/:videoID" element={<Video />}></Route>
          <Route path="/search/:searchResults" element={<SearchResults />}></Route>
        </Routes>
      </Router>
    <h1>You tube </h1>
    
    </div>
  );
}

export default App;