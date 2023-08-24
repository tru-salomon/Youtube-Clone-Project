
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import {useEffect} from "react"
import './App.css'
<<<<<<< HEAD
<<<<<<< HEAD
import NavBar from "./Components/NavBar.jsx"
import Cards from "./Components/Cards.jsx"
import Video from "./Components/Video.jsx"
import ErrorPage from "./Components/ErrorPage.jsx"
import SearchBar from "./Components/SearchBar.jsx"
import About from "./Components/About.jsx"
// import Card from "./Components/Card.jsx"
=======
=======
>>>>>>> 42f9dcfacf01794a9cbbd8a541dda9ad947efe59
import NavBar from "./Components/NavBar/Nav.jsx"
import Cards from "./Components/Cards/Cards.jsx"
import Video from "./Components/Video/Video.jsx"
import ErrorPage from "./Components/ErrorPopup/ErrorPage.jsx"
import SearchBar from "./Components/Search/SearchBar.jsx"
import About from "./Components/AboutPage/About.jsx"
<<<<<<< HEAD
<<<<<<< HEAD
import Card from "./Components/Card/Card.jsx"
>>>>>>> a546da71d24c96f7bb920177a87bbd683a6c4f1b
=======
//import Card from "./Components/Card/Card.jsx"
>>>>>>> bde9e9479f89f37049f7b0e0c124edcdee37e4ba
=======
// import Card from "./Components/Card/Card.jsx"
>>>>>>> 42f9dcfacf01794a9cbbd8a541dda9ad947efe59



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
          <Route path="/search/:searchBar" element={<SearchBar />}></Route>
        </Routes>
      </Router>
    <h1>You tube </h1>
    
    </div>
  );
}

export default App;

