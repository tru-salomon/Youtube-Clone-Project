import { Link } from "react-router-dom";
import './Card.css'

//export default function Card() {

//    return (
//        <>
//            {/* <!-- a video starts --> */}
//            < div className="video" >
//                <div className="thumbnail">
//                    <img src="https://img.youtube.com/vi/tEmcg_aEbDE/maxresdefault.jpg" alt="" />
//                </div>

//                <div className="details">
//                    <div className="author">
//                        <img src="https://yt3.ggpht.com/ytc/AOPolaQijIdiATc56tpfUHVA5xCjv2Sk6yatn9G7obFEng=s68-c-k-c0x00ffffff-no-rj" alt="" />
//                    </div>
//                    <div className="title">
//                        <h3>
//                            Pursuit Our Mission & Impact
//                        </h3>
//                        <a href="">
//                            Pursuit
//                        </a>
//                        <span> 502 Views • 1 Year Ago </span>
//                    </div>
//                </div>
//            </div >
//            {/* <!-- a video Ends --> */}
//        </>
//    )
//}

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
