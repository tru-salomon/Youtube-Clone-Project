//import Card from "../Card/Card";
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
        <div key={video.id.videoId} className="video">
          <img
            className="thumbnail"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <div className="video-text">
            <h3>{video.snippet.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
