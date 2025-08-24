import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import mainImage from "../assets/images/me.png";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mainImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Mwangimark" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mark-mwangi-95759127/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Mwangi C. Mark</h1>
          <p>Full Stack Developer | AI & Machine Learning Engineer</p>



          <div className="mobile_social_icons">
            <a href="https://github.com/Mwangimark" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mark-mwangi-95759127/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;