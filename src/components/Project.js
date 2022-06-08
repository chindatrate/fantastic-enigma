import React from "react";
import "../style/Project.css";
import Project1 from '../img/space.png';
import Project2 from '../img/travelapp.png';
//import Project3 from '';

function Project() {
  return (
    <div className="project" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Some of my projects</h1>
      </div>
      <div className="projects">
        <div className="row">

          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <div className="project_img_box">
                  <img src={Project1} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h5 className="project_text">TRAVEL APP</h5>
                <a href="https://average-android.github.io/GroupProjectRepo/" className="project_btn">View Details</a>
              </div>
            </div>
          </div>


          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <div className="project_img_box">
                  <img src={Project2} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h5 className="project_text">I NEED SPACE</h5>
                <a href="https://ijustneedsomespace.herokuapp.com/" className="project_btn">View Details</a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Project;