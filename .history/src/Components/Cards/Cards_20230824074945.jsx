import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./Cards.css";

//export default function Cards() {
//    return (
//        <>
//            <div className="content">
//                <div className="videos">
//                    <Card />
//                    <Card />
//                    <Card />
//                    <Card />
//                    <Card />
//                    <Card />
//                </div>
//            </div>
//        </>
//    )
//}

export default function Cards({ videos = [] }) {
  return (
    <div className="content">
      {videos.map((video) => (
        <Link to={`/video/${video.id.videoId}`} key={video.id.videoId}>            
        <div className="video">
          <img
            className="thumbnail"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <div className="video-text">
            <h3>{video.snippet.title}</h3>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}
