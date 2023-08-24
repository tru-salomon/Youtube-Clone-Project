import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from "../../utils/constants";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: 'space-between' }}>

      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height="45px" />
      </Link>

      <Paper
        component="form"
        onSubmit={() => { }}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 }
        }}
      >
        <input className='search-bar'
          placeholder='Search...'
          value=""
          onChange={() => { }} />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Stack>
  )
}

export default Navbar