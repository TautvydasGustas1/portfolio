import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Container } from "@material-ui/core"
import projectsData from "../Data/projectsData"
import Project from "./Project"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  innerGrid: {
    border: "1px solid grey",
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  outerContainer: {
    paddingTop: theme.spacing(7),
  },
}))

const Projects = ({ projectRef }) => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.outerContainer}>
        <div className={classes.title} ref={projectRef}>
          <Typography align="center" variant="h3">
            Projects
          </Typography>
        </div>
        <Grid container spacing={6}>
          {projectsData.map(project => (
            <Grid key={project.id} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Project
                name={project.name}
                image={project.image}
                summary={project.summary}
                techUsed={project.techUsed}
                liveDemo={project.liveDemo}
                repository={project.repository}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

Projects.propTypes = {
  projectRef: PropTypes.object.isRequired,
}

export default Projects
