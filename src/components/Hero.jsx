import "./Hero.css";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">
        <h3>Hello, I'm</h3>

        <h1>Vedant Patil</h1>

        <h2>React Developer | Frontend Developer</h2>

        <p>
          Passionate React Developer creating responsive, modern,
          and user-friendly web applications using React, JavaScript,
          HTML, and CSS.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn">Hire Me</a>

          <a href="/resume.pdf" className="btn-outline" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Vedant" />
      </div>

    </section>
  );
}

export default Hero;