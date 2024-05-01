import React from "react";
import "./Services.css";
import theam_pattren from "../../img/theme_pattern.svg";
import Services_Data from "../../img/services_data";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theam_pattren} alt="theam_pattren" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
