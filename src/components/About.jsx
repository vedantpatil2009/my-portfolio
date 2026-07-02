import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-img">
        <img src={profile} alt="Vedant Patil" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>

        <h3>React & Frontend Developer</h3>

        <p>
          Hello! I'm <strong>Vedant Patil</strong>, a passionate Frontend
          Developer and React enthusiast. I enjoy building responsive,
          modern, and user-friendly websites using HTML, CSS,
          JavaScript, React, and Bootstrap. I continuously learn new
          technologies to improve my development skills.
        </p>

        <div className="about-info">
          <div>
            <span>Name:</span>
            <p>Vedant Patil</p>
          </div>

          <div>
            <span>Email:</span>
            <p>vedantpatil008@gmail.com</p>
          </div>

          <div>
            <span>Education:</span>
            <p>Diploma in Artificial intelligence & machine learning Engineering</p>
          </div>

          <div>
            <span>Location:</span>
            <p>Maharashtra, India</p>
          </div>
        </div>

        <a href="#contact" className="about-btn">
          Contact Me
        </a>

      </div>

    </section>
  );
}

export default About;