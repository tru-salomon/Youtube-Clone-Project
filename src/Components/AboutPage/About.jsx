import React from "react";
import './About.css';

export default function About() {
  const projectBio =
    "This project was built by a team of 5 developers. We used a React VITE framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const developers = [
    {
      name: "Shaquala",
      bio:
        "Shaquala is a cat lover. She loves God and has 2 daughters who bring her joy. She strives for greatness and wants to pay it forward so that others may have opportunities to fulfill their dreams.",
      githubLink: "https://github.com/shaqfred",
      image: "https://avatars.githubusercontent.com/u/96317236?s=96&v=4",

    },
    {
      name: "Ricon",
      bio:
        "I've grown passionate about promoting Open Source and Open Standards as I delve into writing code to enhance the workflow and productivity of everyday leaders. Currently, as I explore my potential for crafting technological content through my involvement in the Pursuit program as a 10.1 cohort fellow, I'm dedicated to honing my skills in software engineering. With a background that's as diverse as it is unconventional, my aim is to stretch limits and devise solutions that connect with folks.",
      githubLink: "https://github.com/RAWdevX21",
      image: "https://avatars.githubusercontent.com/u/80225161?v=4"
    },
    {
      name: "Chris",
      bio: "It's been uphill battle throughout this module for Chris. He is an animal aficiado with a passion for the healthcare of both people and birds. He wants to incorporate his prior knowledge into the software industry and has been making strides; both big and small. He worked hard on his ErrorPage to give a fun effect and enjoyed messing around with the CSS. ",
      githubLink: "https://github.com/CSAN7690",
      image: "https://avatars.githubusercontent.com/u/127960419?v=4"
    },

    {
      name: "Tyller",
      bio: "Tyller is a self-taught developer with one year of entry-level experience in full-stack development and data analysis. Tyller played a pivotal role in the successful integration of the SearchBar feature into our YouTube platform, demonstrating impressive functionality. ",
      githubLink: "https://github.com/tsunami-dev",
      image: "https://avatars.githubusercontent.com/u/76138922?v=4"
    },

    {
      name: "Daniel",
      bio: "Helped start the Youtube project for us and implemented changes with Cards, design changes, & repurposed API function. Daniel is a Cybersecurity enthusiast and is currently studying Cybersecurity at Masterschool. ",
      githubLink: " https://github.com/tru-salomon",
      image: "https://avatars.githubusercontent.com/u/131703377?v=4"


    }

  ];

  return (
    <div className="about-wrapper">
      <div className="section">
        <h2>About Our Project</h2>
        <p>{projectBio}</p>
      </div>

      <div className="section">
        <h2>About the Developers</h2>
        {developers.map((developer, index) => (
          <div className="developer" key={index}>
            {developer.image && <img src={developer.image} alt={developer.name} className="developer-image" />}
            <h3 data-text={developer.name} className="retro-text">
              {developer.name}
            </h3> {/* Some fancy effects ✨ */}
            <p>{developer.bio}</p>
            <a href={developer.githubLink}>{developer.name}'s GitHub Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}
