import React, { useState, useEffect } from "react";
import "./Hero.css";
import Profile from "../../img/pic7.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const [profession, setProfession] = useState("Full Stack Developer");

  useEffect(() => {
    // Function to periodically change profession
    const changeProfessionAutomatically = () => {
      const professions = [
        "Full Stack Developer",
        "Web Developer",
        "JavaScript Developer",
        "Content Writer",
      ];
      const randomIndex = Math.floor(Math.random() * professions.length);
      setProfession(professions[randomIndex]);
    };

    // Change profession every 5 seconds
    const intervalId = setInterval(changeProfessionAutomatically, 5000);

    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once

  // Add highlight class when profession changes
  useEffect(() => {
    const highlightTimeout = setTimeout(() => {
      const title = document.querySelector(".Hero h1");
      title.classList.add("highlight");

      // Remove highlight class after 1 second
      setTimeout(() => {
        title.classList.remove("highlight");
      }, 1000);
    }, 100); // Delay to ensure class is added after state update

    return () => clearTimeout(highlightTimeout);
  }, [profession]);

  return (
    <div className="Hero" id="home">
      <img src={Profile} alt="Profile" className="profile-img" />
      <h1>
        <span>I'm ArunKumar</span>, {profession}
      </h1>
      <p>
        👨‍💻 Passionate about crafting seamless user experiences from front-end
        design to back-end functionality. Proficient in a range of technologies
        and frameworks, I thrive on solving complex problems and bringing
        innovative ideas to life. Let's build something amazing together!
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
