import React from "react";
import "../footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="img-link">
        <a href="https://github.com/mambu1998/" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/github-2.png"
            alt="Github"
            className="icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mambu-francis-594943148/"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a href="https://twitter.com/mambu1998" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            alt="Twitter"
            className="icon"
          />
        </a>
      </div>
      <p className="footer-info">
        &copy; Mambu Francis |{" "}
        <a
          href="mambu github link goes here/raw/master/src/assets/Mambu.pdf"
          className="link"
        >
          download resume
        </a>{" "}
        |{" "}
        <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">
          color palette
        </a>{" "}
        | made with{" "}
        <img
          id="react-icon"
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React"
        />
      </p>
    </div>
  );
}

export default Footer;
