import React from "react";
import "./Mywork.css";
import theam_pattren from "../../img/theme_pattern.svg";
import mywork_data from "../../img/mywork_data";
import arrow_icon from "../../img/arrow_icon.svg";

const Mywork = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theam_pattren} alt="theam_pattren" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              alt="work"
              onClick={() => handleClick(work.w_url)}
              className="work-image"
            />
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow_icon" />
      </div>
    </div>
  );
};

export default Mywork;
