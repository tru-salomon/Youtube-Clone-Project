import { Box, CardContent, CardMedia, Card, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../../utils/constants'


const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { md: '320px', xs: '356px' },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelID}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'gray' }}></CardContent>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.default?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid black' }}
        />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'lightgray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </Link>

    </Box>
  )
}

export default ChannelCard