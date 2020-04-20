import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { handleScrollTo } from "./Funtions/Functions"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    alignSelf: "center",
  },
  appBar: {
    backgroundColor: "#2e668e",
  },
}))

const ButtonAppBar = ({ projectRef, skillsRef, aboutRef }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Button onClick={() => handleScrollTo(aboutRef, 80)} color="inherit">
            About
          </Button>
          <Button
            onClick={() => handleScrollTo(projectRef, 80)}
            color="inherit"
          >
            Projects
          </Button>
          <Button onClick={() => handleScrollTo(skillsRef, 80)} color="inherit">
            Skills
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default ButtonAppBar
