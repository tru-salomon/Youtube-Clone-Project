import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box} from '@material-ui/core';




function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "white" }}>
        <Navbar/> 
        <Routes>
          <Route path="/" excat element={<Home-Feed />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/:channel/:id" element={<Channel />} />
          <Route path="/:search/:searchQuery" element={<SearchResult />} />

        </Routes>

        </Box>
      
    </BrowserRouter>
  );
}

export default App;

