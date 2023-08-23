import { useState, useEffect } from "react";

const YT_API_KEY = import.meta.env.VITE_APP_API_KEY;
/*
    YouTube Data API Reference (below):  
    https://developers.google.com/youtube/v3/docs/search/list#usage
*/
const YT_API_ENDPOINT = "https://www.googleapis.com/youtube/v3/search";

const YouTubeAPI = ({ query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `${YT_API_ENDPOINT}?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${YT_API_KEY}`
          //`${YT_API_ENDPOINT}?part=snippet&maxResults=10&q=${query}&key=${YT_API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
          />
        </div>
      ))}
    </div>
  );
};

export default YouTubeAPI;
