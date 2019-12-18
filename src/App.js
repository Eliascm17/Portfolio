import React, { Fragment } from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, Button, CardActions, makeStyles } from "@material-ui/core";
import './App.css';
import Projects from './components/Projects'
import Nav from './components/NavBar'
import NavBar from './components/NavBar';

const Text = () => (
  <Fragment>
    <header>
      <NavBar />
      <h1 className='Name'>
        Hi, I'm Elias</h1>
    </header>

    <section className="section1">
      <h1>About</h1>
    </section>

    <section className="section2">
      <h1>Projects</h1>
    </section>

    <section className="section3">
      <h1>Contact Me</h1>
    </section>
  </Fragment>
);


function App() {
  return (
    <Fragment>
      {/* <NavBar /> */}
      <Text />
    </Fragment>
  );
}

export default App;
