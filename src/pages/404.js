import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography, Button } from "@material-ui/core"
import { navigate } from "gatsby"

const notFoundContainerOuter = {
  paddingTop: "100px",
  height: "74vh",
  position: "relative",
}

const notFoundContainerInner = {
  position: "absolute",
  width: "100%",
  top: "50%",
  textAlign: "center",
}

const buttonStyle = {
  marginTop: "10px",
}

const NotFoundPage = () => (
  <Layout navOFF={true}>
    <SEO title="404: Not found" />
    <Container>
      <div style={notFoundContainerOuter}>
        <div style={notFoundContainerInner}>
          <Typography variant="h3">NOT FOUND</Typography>
          <Typography variant="body2">
            You just hit a route that doesn&#39;t exist... the sadness.
          </Typography>
          <Button
            onClick={() => navigate("/")}
            style={buttonStyle}
            color="primary"
            variant="outlined"
          >
            Portfolio
          </Button>
        </div>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
