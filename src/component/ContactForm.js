import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const submitHandler=()=>{
    console.log('submit');
  }
  return (
    <div className="group-3">
      <form className="contact-form-details" >
        <div className="section-heading ">
          <p className="about-us ">Contact Form</p>
          <div className="underline"></div>
        </div>
        <div className="frame-141 ">
          <div className="frame-13">
            <div class="sphere1" style={{ left: "80%" }}></div>
            <div className="frame-10">
              <input placeholder="FIRST NAME" className="info" />
            </div>
            <div className="frame-11">
              <input placeholder="LAST NAME" className="info" />
            </div>
            <div class="sphere2" style={{ left: "-45%" }}></div>
          </div>
          <div className="frame-12">
            <input placeholder="EMAIL" className="info" />
          </div>
          <div className="frame-14">
            <input placeholder="MESSAGE" className="info" />
          </div>
        </div>

        <button className="submit" onClick={submitHandler}>Submit</button>
      </form>

      <div className="group-892">
        <p className="ask-aquestion">Ask a Question</p>
      </div>
    </div>
  );
}
