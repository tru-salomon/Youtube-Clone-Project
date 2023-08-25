import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { Video } from '../index';


const SearchResult = () => {

  const [videos, setVideos] = useState([]);
  
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchQuery}`)
      .then((data) => setVideos(data.items))
  }, [searchQuery]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight='bold' mb={2}>
        Search Results for: <span style={{ color: 'red' }}>{searchQuery}</span> videos
      </Typography>

      <Video videos={videos} />

    </Box>
  )
}

export default SearchResult