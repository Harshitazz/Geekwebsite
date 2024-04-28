import './About.css'
import logo from '../images/GR_Logo-2.png'


function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="logoCont">
        <img className='logo' src={logo} alt="GR Logo" />
      </div>
      <div className='contentCont'>
        <div className="section-heading">
          <p className="about-us">About Us</p>
          <div className="underline"></div>
        </div>
        <p className="content">
          Community where knowledge meets enthusiasm and coding enthusiasts from different colleges come together to embark on an exciting coding journey. Whether you're a seasoned coder or a beginner eager to dive into the world of programming, Geek Room welcomes you with open arms.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;