import React, { useState } from "react";
import Skills from "../layouts/Skills";
import { about, skillsBar, section2title, social } from "../../profile";

const About = () => {
  const [statsError, setStatsError] = useState(false);
  const primaryStatsUrl =
    "https://github-stats-extended.vercel.app/api?username=Bel-bg&theme=graywhite&show_icons=true&hide_border=true";
  const fallbackStatsUrl =
    "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Bel-bg&theme=default";

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
        <div className="row align-items-center justify-content-center g-4">
          <div className="col-12 col-lg-6 d-flex justify-content-center my-3">
            <a
              href={social?.github || "https://github.com/Bel-bg"}
              target="_blank"
              rel="noopener noreferrer"
              className="github-stats-card"
              title="Voir mon profil GitHub"
            >
              <img
                className="img-fluid github-stats-img"
                alt="Statistiques GitHub de Belmonde"
                src={statsError ? fallbackStatsUrl : primaryStatsUrl}
                onError={() => setStatsError(true)}
              />
            </a>
          </div>

          <div className="col-12 col-lg-6 my-3">
            <div className="skills-grid">
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
    </div>
  );
};

export default About;
