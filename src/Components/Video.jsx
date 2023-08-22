 import {useParams} from "react-router-dom";
 import React, {useEffect, useState} from "react"
 import Youtube from "react-youtube"



 export default function Video() {
    const { videoId } = useParams();

    const [commenterName, setCommenterName] = useState("");
    const [comment, setComment] = useState("");
    const [commentArray, setCommentArray] = useState([]);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let newCommentArray = [...commentArray, { comment }];
  
      setCommentArray(newCommentArray);
      setCommenterName("");
      setComment("");
      
      return (
        <div className="container-fluid">
          <div style={{ textAlignVertical: "center", textAlign: "center" }}>
            <Youtube videoId={videoId}></Youtube>
    
            <form onSubmit={handleSubmit}>
              <div className="form">
                <label>CommenterName</label>
                <input
                  type="text"
                  name="commenter-name"
                  id="commenter-name"
                  onChange={(event) => setCommenterName(event.target.value)}
                  value={commenterName}
                />
                <div>
                  <label>Comment</label>
                  <input
                    type="text"
                    name="comment"
                    id="comment"
                    onChange={(event) => setComment(event.target.value)}
                    value={comment}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
            Comment
          </button>
    
                <ul className="comments"> </ul>
                {commentArray.map((videoId, index) => {
                  return (
                    <li key={index}>
                      {videoId.commenterName} says {`"${videoId.comment}"`}
                    </li>
                  );
                })}
              </div>
            </form>
          </div>
        </div>
      );
    }            
    
 }
 


