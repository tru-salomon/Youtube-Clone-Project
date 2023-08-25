import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { Video, ChannelCard } from "../"

const Channel = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    const { id } = useParams();

    // console.log(channelDetail, videos)

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => { setVideos(data?.items) })
    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(15,9,121,0.9850533963585434) 33%, rgba(255,0,20,1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Video videos={videos} />
            </Box>

        </Box>
    )
}

export default Channel