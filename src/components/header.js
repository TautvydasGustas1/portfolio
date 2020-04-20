import PropTypes from "prop-types"
import React from "react"
import ButtonAppBar from "./appBar"
import { Fragment } from "react"

const Header = ({ siteTitle, projectRef, skillsRef, aboutRef }) => (
  <Fragment>
    <ButtonAppBar
      projectRef={projectRef}
      skillsRef={skillsRef}
      aboutRef={aboutRef}
    />
  </Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
