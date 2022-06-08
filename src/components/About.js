import React from "react";
import "../style/About.css";

function About() {

  return (
    <div className="about_section" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <h1>Welcome!</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello! My name is Chinda and I am an aspiring web developer.
                A creative soul who have a love for problem-solving.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="../img/resume.pdf">
                  <button className="button">Download Cv</button>
                </a>
                <a href="https://www.linkedin.com/in/chinda-trate-242b9661">
                  <button className="button">LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;