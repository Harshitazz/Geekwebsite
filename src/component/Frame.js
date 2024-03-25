import React from "react";
import "./Frame.css";
import { NavLink } from "react-router-dom";


const Frame = () => {
  return (
    <div className="frame-root">
      <div className="call-to-action-container">
        <div className="image-container">
          <div className="upper">
          <img
            className="call-to-action"
            loading="lazy"
            alt=""
            src={require("../images/Screenshot 2024-03-03 195851.png")}
            style={{ width: 'calc(35.33% - 10px)', height: '300px' }} // Adjust the width here
          />
          <img
            className="call-to-action1"
            loading="lazy"
            alt=""
            src={require("../images/Screenshot 2024-03-03 195851.png")}
            style={{ width: 'calc(23.33% - 10px)', height: '250px' , margin: "0px 20px"}} // Adjust the width here
          />
          <img
            className="frame-child6"
            loading="lazy"
            alt=""
            src={require("../images/Screenshot 2024-03-03 195851.png")}
            style={{ width: 'calc(41.33% - 10px)', height: '300px' }} // Adjust the width here
          />
          </div>
          <div className="center-div " style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-60%, -70%)' }}>
          {/* Your content for the center div */}
          <div className="join-us-for2">Join us for exciting</div>
          <div className="header1">
            <div className="section-heading7">

              <div >
              <NavLink
              exact
              to="/events"
              className="about-us7"
            >
              EVENTS
            </NavLink>
              <div className="underline"></div></div>

              <div
              className="arrow-right-solid-1-icon2"
              loading="lazy"
              alt=""
              >
                <i class="fa-solid fa-arrow-right-long"></i>
            </div>
              
            </div>
            

              
          </div>


        </div>
          <img
            className="call-to-action2"
            loading="lazy"
            alt=""
            src={require("../images/Screenshot 2024-03-03 195851.png")}
            style={{ width: 'calc(33.33% - 10px)' , height: '290px'}} // Adjust the width here
          />
          <img
            className="call-to-action3"
            loading="lazy"
            alt=""
            src={require("../images/Screenshot 2024-03-03 195851.png")}
            style={{ width: 'calc(33.33% - 10px)', height: '270px'  , margin: "0px 15px" }} // Adjust the width here
          />
          <img
            className="call-to-action4"
            loading="lazy"
            alt=""
            src={require("../images/Screenshot 2024-03-03 195851.png")}
            style={{ width: 'calc(33.33% - 10px)', height: '290px' }} // Adjust the width here
          />
        </div>
      </div>
    </div>
  );
};


export default Frame;
