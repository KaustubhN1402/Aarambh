import React from "react";
import "./About.css";
import { useParams } from "react-router-dom"
import Header from "./Header";
const AboutUs = () => {
  
    return (
      <div className="about-us-container">
        <Header />
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p>
            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
            adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
            fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
            imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
            Suspendisse in justo eu magna luctus suscipit.
          </p>
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>S.no.22, flat no 101, Kamalacity, building B, </p>
            <p>wing B, near rajas societ, Katraj, </p>
            <p>Pune-411046, Maharashtra - INDIA</p>
            <p>Phone: +1 123 456 7890</p>
            <p>Toll Free: 1-800-123-4567</p>
            <p>Email: example@example.com</p>
          </div>
          <div className="follow-us">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://instagram.com">
                <img src="./images/insta.webp" alt="Instagram" />
              </a>
              <a href="https://twitter.com">
                <img src="./images/twitter.jpg" alt="Twitter" />
              </a>
              <a href="https://facebook.com">
                <img src="./images/fb.jpg" alt="Facebook" />
              </a>
              <a href="https://linkedin.com">
                <img src="./images/linkdin.jpg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
