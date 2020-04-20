import React from "react"
import { Typography } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import GoDown from "./GoDown"
import bannerBack from "../images/banner-background.png"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: "#1c2a7c",
  },
  linkBox: {
    textAlign: "center",
    color: "inherit",
  },
  banner: {
    height: "100vh",
    position: "relative",
    backgroundImage: `url(${bannerBack})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  scrollDownButton: {
    position: "absolute",
    bottom: "55px",
    width: "100%",
    textAlign: "center",
  },
  infoContainer: {
    position: "absolute",
    width: "100%",
    top: "30%",
    color: "black",
  },
}))

const Banner = ({ aboutRef, projectRef }) => {
  const classes = useStyles()
  return (
    <div ref={aboutRef} className={classes.banner}>
      <div className={classes.infoContainer}>
        <Typography align="center" variant="h4">
          Tautvydas Gustas
        </Typography>
        <Typography align="center" variant="h5">
          Student & Fullstack developer
        </Typography>
        <div className={classes.linkBox}>
          <Button
            color="inherit"
            size="medium"
            rel="noopener"
            className={classes.button}
            startIcon={<GitHubIcon />}
            target="_blank"
            href="https://github.com/TautvydasGustas1"
          >
            Repository
          </Button>
          <Button
            color="inherit"
            size="medium"
            rel="noopener"
            className={classes.button}
            startIcon={<LinkedInIcon />}
            target="_blank"
            href="https://www.linkedin.com/in/tautvydas-gustas-a76916198/"
          >
            LinkedIn
          </Button>
        </div>
      </div>
      <div className={classes.scrollDownButton}>
        <GoDown projectRef={projectRef} />
      </div>
    </div>
  )
}
export default Banner
