import React from "react"
import PropTypes from "prop-types"
import GitHubIcon from "@material-ui/icons/GitHub"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
} from "@material-ui/core"
import { Fragment } from "react"

const useStyles = makeStyles(theme => ({
  button: {
    color: "white",
  },
  rootCard: {
    background: "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
  },
  mediaCard: {
    maxWidth: "35%",
    margin: "auto",
    marginTop: "20px",
  },
  cardContent: {
    textAlign: "center",
  },
  cardAction: {
    justifyContent: "center",
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

//#1a72be;

const Project = ({
  name,
  image,
  summary,
  techUsed,
  repository,
  liveDemo,
  borderRadius,
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Card className={classes.rootCard}>
        <CardMedia
          component="img"
          className={classes.mediaCard}
          image={image}
          title={name}
          style={{ borderRadius: borderRadius }}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
          <Divider className={classes.divider} about="Technologies used" />
          <Typography variant="body2" color="textSecondary" component="p">
            {techUsed}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button
            startIcon={<PlayCircleOutlineIcon />}
            size="small"
            color="inherit"
            href={liveDemo}
            className={classes.button}
            target="_blank"
            rel="noopener"
          >
            Live demo
          </Button>
          <Button
            className={classes.button}
            href={repository}
            startIcon={<GitHubIcon />}
            size="small"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            Repository
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string,
  techUsed: PropTypes.string,
  repository: PropTypes.string.isRequired,
  liveDemo: PropTypes.string.isRequired,
}

export default Project
