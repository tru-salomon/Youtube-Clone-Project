import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Home_Feed, Video, Channel, SearchResult } from './components/';





function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "white" }}>
        <Navbar />
        <Routes>
          <Route path="/" excat element={<Home_Feed />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/:channel/:id" element={<Channel />} />
          <Route path="/:search/:searchQuery" element={<SearchResult />} />

        </Routes>

      </Box>

    </BrowserRouter>
  );
}

export default App;

