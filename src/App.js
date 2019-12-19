import React, { Fragment } from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, Button, CardActions, makeStyles } from "@material-ui/core";
import './App.css';
import Projects from './components/Projects'
import Nav from './components/NavBar'
import NavBar from './components/NavBar';
import { Link } from 'react-scroll'

const Text = () => (
  <Fragment>
    <NavBar />
    <header>
      {/* <NavBar /> */}
      <h1 className="Name" name="home">
        Hi, I'm Elias
      </h1>
    </header>

    <section className="section1" name="about">
      <h1>About</h1>
    </section>

    <section className="section2" name="projects">
      {/* <h1>Projects</h1> */}
      <Projects />
    </section>

    <section className="section3" name="contact">
      <h1>Contact Me</h1>
    </section>
  </Fragment>
);


function App() {
  return (
    <Fragment>
      <Text />
    </Fragment>
  );
}

export default App;
