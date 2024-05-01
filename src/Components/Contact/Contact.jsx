import React from "react";
import "./Contact.css";
import theam_pattren from "../../img/theme_pattern.svg";
import mail_icon from "../../img/mail_icon.svg";
import location_icon from "../../img/location_icon.svg";
import call_icon from "../../img/call_icon.svg";

const Contact = () => {
   const onSubmit = async (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);

     formData.append("access_key", "702669a6-fbe2-4529-8169-685f641232e9");

     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);

     const res = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: json,
     }).then((res) => res.json());

     if (res.success) {
       alert(res.message);
     }
   };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theam_pattren} alt="theam_pattren" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm Currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-deatils">
            <div className="contact-deatil">
              <img src={mail_icon} alt="mail_icon" />
              <p>parunkumar645@gmail.com</p>
            </div>
            <div className="contact-deatil">
              <img src={call_icon} alt="call_icon" />
              <p>9384495974</p>
            </div>
            <div className="contact-deatil">
              <img src={location_icon} alt="location_icon" />
              <p>Coimbatore , Tamilnadu , India </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}  className="contact-right" >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message"  rows="8" placeholder="Enter Your Message"></textarea>
          <button type="submit" className="contect-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
