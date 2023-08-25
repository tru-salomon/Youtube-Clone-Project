import React from "react";
import './About.css';

export default function About() {
  const projectBio =
    "This project was built by a team of 5 developers. We used a React VITE framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const shaqFredBio = 
  "Shaquala is a cat lover. she loves God and has 2 daughters who bring her joy.She strives for greatness and want to pay it forward so that others may have opportunities to fulfill their dreams."
  const RiconsBio =
    "I've grown passionate about promoting Open Source and Open Standards as I delve into writing code to enhance the workflow and productivity of everyday leaders. Currently, as I explore my potential for crafting technological content through my involvement in the Pursuit program as a 10.1 cohort fellow, I'm dedicated to honing my skills in software engineering. With a background that's as diverse as it is unconventional, my aim is to stretch limits and devise solutions that connect with folks.";
  const ChrisBio =
    "Worked on errorPage";
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
    </div>
  );
}