import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import StyleContext from "../../contexts/StyleContext";
import { workExperiences } from "../../portfolio";
import { socialMediaLinks } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <div className="header-left">
          Erik Pohle
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#greeting">Introduction</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {exp === true && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          <li>
            <a href="#skillsProgress">Proficiency</a>
          </li>
          <li>
            <a href={`mailto:${socialMediaLinks.gmail}`} newTab="_blank">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
