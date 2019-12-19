import React, { Fragment } from 'react';
import { Grid } from "@material-ui/core";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import './Projects.css'


const Projects = () => (
  <Grid
    container
    spacing={2}
    direction="row"
    justify="center"
    alignItems="center"
    className="projectsGrid"
  >
    <Grid item xs={4} style={{ flexBasis: "auto" }}>
      <div className="wrapper">
        <div className="clash-card barbarian">
          <div className="card__image1"></div>
          <div className="clash-card__level clash-card__level--barbarian">
            CS 3366 - Fall 2019
          </div>
          <div className="clash-card__unit-name">Smart Mirror</div>
          <div className="clash-card__unit-description">Desc here</div>
          <div>
            <ButtonToolbar>
              <Button color="cyan">Repository</Button>
              <Button color="yellow">Demo</Button>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    </Grid>
    <Grid item xs={4} style={{ flexBasis: "auto" }}>
      <div className="wrapper">
        <div className="clash-card barbarian">
          <div className="card__image2"></div>
          <div className="clash-card__level clash-card__level--barbarian">
            CS 3366 - Fall 2019
          </div>
          <div className="clash-card__unit-name">TTU Freshman Guide</div>
          <div className="clash-card__unit-description">Desc here</div>
          <div>
            <ButtonToolbar>
              <Button color="cyan">Repository</Button>
              <Button color="yellow">Demo</Button>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    </Grid>
    <Grid item xs={4} style={{ flexBasis: "auto" }}>
      <div className="wrapper">
        <div className="clash-card barbarian">
          <div className="card__image3"></div>
          <div className="clash-card__level clash-card__level--barbarian">
            Personal Project
          </div>
          <div className="clash-card__unit-name">Porftolio Website</div>
          <div className="clash-card__unit-description">Desc here</div>
          <div>
            <ButtonToolbar>
              <Button color="cyan">Repository</Button>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default Projects;