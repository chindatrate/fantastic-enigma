import React, { useState } from "react";
import "../style/Home.css";
import Nav from 'react-bootstrap/Nav'

function Home() {
  return (
    <div className="home" id="Home">
      <div className="home_bg">
        <div className="header d_flex align_items_center pxy_30">
          <div className="nav">
            <ul>
              <li><a href="#Home">Home</a>
              </li>
              <li><a href="#About">About</a>
              </li>
              <li><a href="#Portfolio">Portfolio</a>
              </li>
              <li><a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>


        </div>

      </div>
    </div>
  );
}

export default Home;