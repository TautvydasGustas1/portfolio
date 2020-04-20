/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import Header from "./header"
import "./layout.css"
import { Container, CssBaseline } from "@material-ui/core"

const Layout = ({ children, projectRef, aboutRef, skillsRef }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Viga",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          projectRef={projectRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          siteTitle={data.site.siteMetadata.title}
        />
        <Container disableGutters={true} maxWidth={false}>
          <main className="background-main">{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
