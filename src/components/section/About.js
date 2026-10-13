import React from "react";
import Skills from "../layouts/Skills";
import { about, skillsBar, section2title } from "../../profile";

const About = () => {
  return (
    <div id="about" className="effect2">
      <div data-aos="zoom-in-up" data-aos-once="true" className="row">
        <div className="photo"></div>

        <div className="col-12 offset-md-1 col-md-6 about">
          <div className="About-title-box">
            <h1 id="About" className="red-line">
              {section2title}
            </h1>
          </div>
          <p className="lead about-text">{about.paragraph}</p>
        </div>
      </div>
      <div id="Skills" className="text-center mt-4 container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center my-3">
            <img
              className="img-fluid"
              alt="Statistiques GitHub"
              src="https://github-readme-stats.vercel.app/api?username=bel-bg&theme=graywhite&show_icons=true&hide_border=true"
            />
          </div>

          <div className="col-12 col-md-6 row d-flex justify-content-center skills m-0">
            {skillsBar.map((x) => (
              <Skills
                key={x.name}
                faClass={x.faClass}
                svg={x.svg}
                label={x.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
