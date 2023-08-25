import { Link } from "react-router-dom";
import './Card.css'

export default function Card({ videoId, thumbnailUrl, title }) {
  return (
    <div className="video">
      <Link to={`/videos/${videoId}`}>
        <div className="thumbnail">
          <img src={thumbnailUrl} alt={title} />
        </div>
        <div className="video-text">
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
