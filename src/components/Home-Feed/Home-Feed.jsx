import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { categories } from '../../utils/constants';

const selectedCategory = 'New';

const Home_Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: "auto", md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Stack direction='row' sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
          {categories.map((category) => (
            <button key={category.name} className='sidebar-btn' style={{ background: category.name === selectedCategory && "red", width: '100%' }}>
              <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
              <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
          ))}
        </Stack>

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5 }}>
          © 2023 Pursuit Fellows
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight='bold' mb={2}>
          New <span style={{ color: 'red' }}>Videos</span>
        </Typography>

        <Box videos={[]} />
        
      </Box>
    </Stack>
  )
}

export default Home_Feed