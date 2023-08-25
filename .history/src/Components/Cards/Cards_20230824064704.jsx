import Card from "../Card/Card";
import "./cards.css";

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
        <div key={video.id.videoId} className="videos">
          <h3>{video.snippet.title}</h3>
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
          />
        </div>
      ))}
    </div>
  );
}
