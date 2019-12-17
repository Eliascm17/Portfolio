import React, { Fragment } from 'react';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  makeStyles,
  Grid
} from "@material-ui/core";
import './Projects.css'


const Projects = () => (
  <Grid
    container
    spacing={3}
    direction="row"
    justify="space-around"
    alignItems="center"
    className="projectsGrid"
  >
    <Grid item xs={4} style={{ flexBasis: "auto" }}>
      <Card className="Card1" style={{ width: "450", height: "600px" }}>
        <CardActionArea>
          <CardMedia
            style={{ height: "300px" }}
            component="img"
            alt="Projec 1"
            height="140"
            image="https://images.unsplash.com/photo-1531168142392-1a206ca970c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Projec 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Desc of project
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Repo
          </Button>
          <Button size="small" color="primary">
            Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={4} style={{ flexBasis: "auto" }}>
      <Card className="Card2" style={{ width: "450", height: "600px" }}>
        <CardActionArea>
          <CardMedia
            style={{ height: "300px" }}
            component="img"
            alt="Projec 1"
            height="140"
            image="https://images.unsplash.com/photo-1531168142392-1a206ca970c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Projec 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Desc of project
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Repo
          </Button>
          <Button size="small" color="primary">
            Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={4} style={{ flexBasis: "auto" }}>
      <Card className="Card3" style={{ width: "450", height: "600px" }}>
        <CardActionArea>
          <CardMedia
            style={{ height: "300px" }}
            component="img"
            alt="Projec 1"
            height="140"
            image="https://images.unsplash.com/photo-1531168142392-1a206ca970c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Projec 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Desc of project
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Repo
          </Button>
          <Button size="small" color="primary">
            Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

export default Projects;