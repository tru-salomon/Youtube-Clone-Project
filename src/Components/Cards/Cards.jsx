import Card from "../Card/Card";
import "./Cards.css";


export default function Cards({ videos = [] }) {
  return (
    <div className="content">
      {videos.map((video) => (
        <Card
          key={video.id.videoId}
          videoId={video.id.videoId}
          thumbnailUrl={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
        />
      ))}
    </div>
  );
}
