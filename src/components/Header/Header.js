import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logo from "../../Assets/logo.png";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={logo}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="experience" smooth={true}>
            Experience
          </NavLink>
          <NavLink className="menu-item" to="education" smooth={true}>
            Education
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1TwXM8aZKfSJEYy48RnLmRS_DSGuI6P6k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
