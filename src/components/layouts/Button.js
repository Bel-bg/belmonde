import React from "react";

const Button = ({text = "", link = "", className = ""}) => {
  return (
    <>
      <div className="mx-auto">
        <a href={link}>
          <button className={`see ${className}`}>
          {text}
        </button>
        </a>
      </div>
    </>
  );
};

export default Button;
