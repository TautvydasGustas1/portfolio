import React from "react"
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  Divider,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ReactIcon from "../Icons/ReactIcon"
import NodeJsIcon from "../Icons/NodeJsIcon"
import ExpressIcon from "../Icons/ExpressIcon"
import MongoIcon from "../Icons/MongoIcon"
import CSS3Icon from "../Icons/CSS3Icon"
import HtmlIcon from "../Icons/HtmlIcon"
import JsIcon from "../Icons/JsIcon"
import CIcon from "../Icons/CIcon"
import Skill from "./Skill"

const useStyles = makeStyles(theme => ({
  iconCSS: {
    fontSize: "7rem",
  },
  rootCard: {
    background: "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
  },
  skillsContainer: {},
  LanguagesContainer: {
    marginTop: theme.spacing(3),
  },
  TitleContainer: {
    marginBottom: theme.spacing(4),
  },
  cardContent: {
    display: "flex",
  },
  languagesGrid: {
    alignContent: "start",
  },
  skillsText: {
    margin: theme.spacing(2),
  },
  con: {
    paddingTop: theme.spacing(7),
  },
  divider: {
    backgroundColor: "white",
  },
}))

const Skills = ({ skillsRef }) => {
  const classes = useStyles()
  return (
    <div className={classes.con}>
      <Container>
        <div ref={skillsRef} className={classes.skillsContainer}>
          <div className={classes.TitleContainer}>
            <Typography align="center" variant="h3">
              Skills
            </Typography>
          </div>
          <Card className={classes.rootCard}>
            <CardContent className={classes.cardContent}>
              <Grid container spacing={1}>
                <Grid container item spacing={1} md={6} lg={6}>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.skillsText}
                      align="center"
                      variant="h5"
                    >
                      Tools/Technologies
                    </Typography>
                  </Grid>
                  <Skill name={"React"}>
                    <ReactIcon className={classes.iconCSS} />
                  </Skill>
                  <Skill name={"NodeJS"}>
                    <NodeJsIcon className={classes.iconCSS} />
                  </Skill>
                  <Skill name={"Express.js"}>
                    <ExpressIcon className={classes.iconCSS} />
                  </Skill>
                  <Skill name={"MongoDB"}>
                    <MongoIcon className={classes.iconCSS} />
                  </Skill>
                  <Skill name={"HTML5"}>
                    <HtmlIcon className={classes.iconCSS} />
                  </Skill>
                  <Skill name={"CSS3"}>
                    <CSS3Icon className={classes.iconCSS} />
                  </Skill>
                </Grid>
                <Divider
                  className={classes.divider}
                  flexItem={true}
                  orientation="vertical"
                />
                <Grid
                  className={classes.languagesGrid}
                  container
                  item
                  spacing={1}
                  md={6}
                  lg={6}
                >
                  <Grid item xs={12}>
                    <Typography
                      className={classes.skillsText}
                      align="center"
                      variant="h5"
                    >
                      Languages
                    </Typography>
                  </Grid>
                  <Skill name={"Javascript"}>
                    <JsIcon className={classes.iconCSS} />
                  </Skill>
                  <Skill name={"C#"}>
                    <CIcon className={classes.iconCSS} />
                  </Skill>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default Skills
