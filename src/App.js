import React, { Fragment } from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, Button, CardActions, makeStyles } from "@material-ui/core";
import './App.css';
import Projects from './components/Projects'

const Text = () => (
    <div className='landingContainer'>
        <h1 className='Name'>Hi, I'm Elias</h1>
    </div>
);

const Triangle = () => (
  //   <div>
  //     <div className="triangle1"></div>
  //     <div className="square"></div>
  //     <div className="triangle2"></div>
  //   </div>

  <svg viewBox="10 10 167 281" version="1.1">
    <polygon className="parallelogram" points="0,226 83.5,0.1 167,226 " />
  </svg>

);   

function App() {
  return (
    <Fragment>
      <Text />
      <Triangle />
      <Projects />
    </Fragment>
  );
}

export default App;
