import React from 'react';
import Project from './Project';
function Portfolio() {
  const projects = [
    {
      name: "Travel App",
      deployed: "https://average-android.github.io/GroupProjectRepo/",
      image: "travel-app-screenshot.png",
      imageAlt: "Travel App",
    },
    {
      name: "Pokedex",
      repository: "https://github.com/a-donati/weather-dashboard",
      deployed: "https://unh-pokedex-final.herokuapp.com/",
      image: "weather-app-screenshot.png",
      imageAlt: "Pokedex",
    },
    {
      name: "I NEED SPACE",
      deployed: "https://ijustneedsomespace.herokuapp.com/",
      image: "samplereadmedemo.gif",
      imageAlt: "I need space",
    },
    {
      name: "Work Day Scheduler",
      deployed: "https://chindatrate.github.io/work-day-scheduler/",
      image: "team-profile-generator-screenshot.png",
      imageAlt: "Work Day Scheduler",
    },
    {
      name: "Code Quiz",
      deployed: "https://chindatrate.github.io/code-quiz/",
      image: "employee-tracker.png",
      imageAlt: "Code Quiz",
    },
    {
      name: "Random Password Generator",
      deployed: "https://chindatrate.github.io/randompasswordgenerator/",
      image: "e-commerce-demo.gif",
      imageAlt: "Random Password Generator",
    },
  ];


  return (
    <>
      <h3 className="about-title">Portfolio</h3>

      <Project projects={projects[0]}></Project>
      <Project projects={projects[1]}></Project>
      <Project projects={projects[2]}></Project>
      <Project projects={projects[3]}></Project>
      <Project projects={projects[4]}></Project>
      <Project projects={projects[5]}></Project>
    </>
  );

}

export default Portfolio;