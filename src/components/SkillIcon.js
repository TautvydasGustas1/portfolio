import React, { Fragment } from "react"
import PropTypes from "prop-types"

const SkillIcon = ({ children }) => {
  return (
    <Fragment>
      <div className="skills-icon_outer">{children}</div>
    </Fragment>
  )
}

SkillIcon.propTypes = {
  children: PropTypes.object,
}

export default SkillIcon
