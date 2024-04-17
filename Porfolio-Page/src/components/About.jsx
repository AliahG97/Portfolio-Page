//Imports
import React from "react";

import Aliah from "../assets/Images/Aliah.jpg";


// Function that renders the about page & exports
export default function About() {
  return (

    <div



      className="About"
      >

    <div className="img-container">
      <img src={Aliah} alt="Aliah"/>
    </div>
      <div className="About-text">
        <h1 id="about-me-title">About Me</h1>
        <p> My name is Aliah Guerra, I decided to get into the coding program after I taught myself to build apps during covid. 
        The app ws succesfful and gained recognition by CBC news, Local news papers and an American magazine company. 
        Thanks to the early success of my app I decided to purse app development further to establish a solid career in this field, 
        sharpen my skills further and truly change the trajectory of my life. 
        By gaining a solid understanding of the fundementals of computer science and web-development I'am already one step closer to achieiving my goals!
        </p>
      </div>
    </div>

  );
}
