import React, {useState} from 'react';
import { Icon, Nav } from 'rsuite';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import './NavBar.css'

const styles = {
  marginBottom: 50
};

const NavBar = () => {
  const [activeKey, setactiveKey] = useState("home");

  function handleChange(e) {
    setactiveKey(e);
    scroll.scrollTo(e.to);
  }

  return (
    <Nav
      appearance="subtle"
      activeKey={activeKey}
      onSelect={handleChange}
      style={styles}
    >
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={300}
      >
        <Nav.Item eventKey="home">Home</Nav.Item>
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-60}
        duration={200}
      >
        <Nav.Item eventKey="about">About</Nav.Item>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={200}
      >
      <Nav.Item eventKey="projects">Projects</Nav.Item>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={80}
        duration={200}
      >
      <Nav.Item eventKey="contact">Contact</Nav.Item>
      </Link>
    </Nav>
  );
}

export default NavBar;