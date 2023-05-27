import "./skills.scss";

// import Wall from "../../assets/wallpaper/imac.jpg";
import HTML from "../../assets/skills/1.png";
import CSS from "../../assets/skills/2.png";
import JS from "../../assets/skills/3.png";
import SASS from "../../assets/skills/4.png";
import REACT from "../../assets/skills/5.png";
import TAIL from "../../assets/skills/6.png";
import TYPE from "../../assets/skills/7.png";
import VSC from "../../assets/skills/8.png";
import NEXT from "../../assets/skills/9.png";

// import { Parallax } from "react-parallax";
// import React from "react";
import "./skills.scss";

const skillsData = [
  { image: HTML, name: "HTML" },
  { image: CSS, name: "CSS" },
  { image: JS, name: "JavaScript" },
  { image: REACT, name: "React" },
  { image: VSC, name: "VS Code" },
  { image: SASS, name: "SASS" },
];

const nextSkillsData = [
  { image: TYPE, name: "TypeScript" },
  { image: NEXT, name: "Next.js" },
  { image: TAIL, name: "Tailwind" },
];

export default function Skills() {
  const renderSkills = (data) => {
    return data.map((skill, index) => (
      <div className="flip-card" key={index}>
        <div className="flip-card-inner">
          <img className="flip-card-front" src={skill.image} alt="" />
          <div className="flip-card-back">
            <h3>{skill.name}</h3>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills__items">
        <div className="skills__row-1">
          {renderSkills(skillsData.slice(0, 3))}
        </div>
        {renderSkills(skillsData.slice(3))}
        <h2 className="skills__row-next">My next Skills</h2>
        <div className="skills__row-2">{renderSkills(nextSkillsData)}</div>
      </div>
    </div>
  );
}


