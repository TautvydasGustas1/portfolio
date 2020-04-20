import React from "react"
import PropTypes from "prop-types"
import { Typography, Grid } from "@material-ui/core"
import SkillIcon from "./SkillIcon"

const Skill = ({ name, children }) => (
  <Grid item xs={6} sm={6} md={4} lg={4}>
    <section className="text-center">
      <div className="skills-container_title">
        <Typography>{name}</Typography>
        <div>
          <SkillIcon>{children}</SkillIcon>
        </div>
      </div>
    </section>
  </Grid>
)

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Skill
