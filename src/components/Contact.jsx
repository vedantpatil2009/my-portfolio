import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>
            I'm available for internships, freelance projects, and collaborations.
            Feel free to contact me.
          </p>

          <p><FaEnvelope /> vedant@gmail.com</p>
          <p><FaPhone /> +91 9876543210</p>

          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="6" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;