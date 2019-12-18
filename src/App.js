import React, { Fragment } from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, Button, CardActions, makeStyles } from "@material-ui/core";
import './App.css';
import Projects from './components/Projects'

const Text = () => (
  <Fragment>
    <header>
      <h1>Hi, I'm Elias</h1>
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
      <Text />
    </Fragment>
  );
}

export default App;
