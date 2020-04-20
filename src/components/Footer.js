import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography, IconButton } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(theme => ({
  footerOuter: {
    width: "100%",
  },
  footerInner: {
    textAlign: "center",
    height: "200px",
    display: "flex",
    alignItems: "center",
  },
  infoContainer: {
    margin: "auto",
  },
  iconsContainer: {
    margin: "auto",
  },
}))

const Footer = props => {
  const classes = useStyles()
  return (
    <footer className="background-main">
      <div className={classes.footerOuter}>
        <Container>
          <div className={classes.footerInner}>
            <div className={classes.infoContainer}>
              <Typography align={"center"} variant={"body2"}>
                © {new Date().getFullYear()}, Tautvydas Gustas
              </Typography>
              <div className={classes.iconsContainer}>
                <IconButton
                  aria-label="github-profile"
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/TautvydasGustas1"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  aria-label="linkedIn-profile"
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/tautvydas-gustas-a76916198/"
                >
                  <LinkedInIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
