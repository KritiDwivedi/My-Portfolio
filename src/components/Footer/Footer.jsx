import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span >kritidwivedikd111@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} onClick={() => window.open('https://www.instagram.com/')}/>
          <Facebook color="white" size={"3rem"} onClick={() => window.open('https://www.facebook.com/')}/>
          <Gitub color="white" size={"3rem"}  onClick={() => window.open('https://github.com/KritiDwivedi?tab=repositories')}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
