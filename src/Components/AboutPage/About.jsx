import React from "react";
import './About.css'

export default function About() {
  const projectBio =
    "This project was built by a team of 5 developers. We used a React VITE framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const shaqFredBio = 
  "Shaquala is a cat lover. she loves God and has 2 daughters who bring her joy.She strives for greatness and want to pay it forward so that others may have opportunities to fulfill their dreams."
  const RiconsBio =
    "great coder.";
  const ChrisBio =
    "Worked on errorPage";
  const TyllerBio =
    "Worked on search bar, wants to advance his knowledge on tech so he can advance it as we use it today."
  return (
    <div className="about-wrapper" style={{ textAlignVertical: "center", textAlign: "center" }}>
      <article key="about">
        {/* <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
        </Routes> */}
      </article>
      <h2>About Our Project</h2>
      <p>{projectBio}</p>
      <h2>About the Developers</h2>
      <p>{shaqFredBio}</p>
      <a href={"https://github.com/shaqfred"}>Shaquala's GitHub Link</a>
      <p>{RiconsBio}</p>
      <a href={""}> Ricon's GitHub Link</a>
      <p>{ChrisBio}</p>
      <a href={""}> Chris's GitHub Link</a>
      <p>{TyllerBio}</p>
      <a href={"https://github.com/tsunami-dev"}> Tyller's GitHub Link</a>
    </div>
  );
}