import React from "react";

import "./DarkBackground.css";
import IncreasingNumber from "./IncreasingNumber";
import image1 from '../images/GR Logo.png';
import image2 from '../images/Screenshot 2024-03-03 195851.png';
import image3 from '../logo.svg'
import Carousel from "./Carousel";
import Frame from "./Frame";
import ContactForm from "./ContactForm";
import Section from "./section";

const DarkBackground = () => {
  const images = [image1,image2,image3];
  return (
    <>
    <div className="dark-background">
      <div className="features-frame">
        
        <div className="text-w-image-container">
          
          <div className="display-heading">
          <p className="geek-room">GEEK ROOM</p>
      <p className="display-text">Learn. Connect. Grow.</p>
          </div>
          <div class="sphere2"></div>
          <div
            className="ellipse-shape-icon">
              <Carousel images={images} interval={2000} />
            </div>
            
          
        </div>
      </div>
      <div class="sphere1"></div>
      <div className="about-us-section2">
      

        <div className="section-title  ">
          <div className="features-pill">
            <div className="features">
              <div className="feature">
                <b className="k"><IncreasingNumber stoppingNumber={70} speed={70} />+</b>
                <div className="team-members">
                  <p className="team">Active</p>
                  <p className="members">Members</p>
                </div>
              </div>
              <div
                className="feature-divider-icon"
                
              />
              <div className="feature">
                <b className="k"><IncreasingNumber stoppingNumber={10} speed={500} />+</b>
                <div className="team-members">
                  <p className="events">Events</p>
                  <p className="organized">Organized</p>
                </div>
              </div>
              <div
                className="feature-divider-icon"
                
              />
              <div className="feature">
                <b className="k"><IncreasingNumber stoppingNumber={200} speed={25} />+</b>
                <div className="team-members">
                  <p className="team">Team</p>
                  <p className="members">Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div><Section/></div>
      </div>
      
      
    </div>
    <div className="framecontainer">
    <Frame/>
    </div>
    <div className="framecontainer">    
      <ContactForm/>
    </div>
    </>
  );
};

export default DarkBackground;
