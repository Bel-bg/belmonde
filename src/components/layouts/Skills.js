import React from "react";

const Skills = ({ label, svg, faClass }) => {
  const isFlutter = label && label.toLowerCase() === "flutter";

  return (
    <div data-aos="fade-up" className="skill__item skill__square">
      <div className="skill__icon-wrapper">
        {isFlutter ? (
          <svg
            className="skill__svg"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
          </svg>
        ) : svg ? (
          <svg
            className="skill__svg"
            aria-hidden="true"
            focusable="false"
            data-icon={label}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
          >
            <path d={svg} />
          </svg>
        ) : (
          <i className={`${faClass} skill__icon`}></i>
        )}
      </div>
      <h6 className="skill__label mt-2 mb-0">{label}</h6>
    </div>
  );
};

export default Skills;
