import React, {useState} from 'react';
import { Icon, Nav } from 'rsuite';
import './NavBar.css'

const styles = {
  marginBottom: 50
};

// const scrollToRef = ref => window.scrollTo(0, offsetTop);   

const NavBar = () => {
  const [activeKey, setactiveKey] = useState("home");

  function handleChange(e, ref) {
    setactiveKey(e);
    // scrollToRef(ref);
  }

  return (
    <Nav  appearance='subtle' activeKey={activeKey} onSelect={handleChange} style={styles}>
      <Nav.Item eventKey="home">Home</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
      <Nav.Item eventKey="projects">Projects</Nav.Item>
      <Nav.Item eventKey="contact">Contact</Nav.Item>
    </Nav>
  );
}

export default NavBar;