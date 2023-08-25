import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import React, { useState } from "react";
import "./Video.css"

export default function Video() {
  const { videoId } = useParams();

  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    //let newCommentArray = [...commentArray, { comment }];
    let newCommentArray = [...commentArray, { commenterName, comment }];

    setCommentArray(newCommentArray);
    setCommenterName("");
    setComment("");
  }
  console.log(commentArray);

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

            <button>Add Comment</button>

            <ul className="comments"> </ul>
            {/*{commentArray.map((videoId, index) => {*/}
            {commentArray.map((commentObj, index) => {  
              return (
                <li key={index}>
                  {commentObj.commenterName} says {`"${commentObj.comment}"`}
                </li>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
