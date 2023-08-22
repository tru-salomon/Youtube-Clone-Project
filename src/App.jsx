import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import {useEffect} from "react"
import './App.css'

 
 import Video from "./Components/Video.jsx"

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
    <h1>You tube </h1>
    <Video />
    </div>
  );
}

export default App;