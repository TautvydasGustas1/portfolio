import React from "react"
import PropTypes from "prop-types"
import { IconButton } from "@material-ui/core"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { Fragment } from "react"
import { handleScrollTo } from "./Funtions/Functions"

const borderStyle = {
  border: "1px solid",
  boxShadow: "0 0 10px",
}

const GoDown = ({ projectRef }) => {
  return (
    <Fragment>
      <IconButton
        aria-label="go-down-button"
        size="small"
        style={borderStyle}
        onClick={() => {
          handleScrollTo(projectRef, 80)
        }}
      >
        <KeyboardArrowDownIcon fontSize="default" />
      </IconButton>
    </Fragment>
  )
}

GoDown.propTypes = {
  projectRef: PropTypes.object.isRequired,
}

export default GoDown
