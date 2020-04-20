import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { useRef } from "react"

const IndexPage = () => {
  const projectRef = useRef(null)
  const skillsRef = useRef(null)
  const aboutRef = useRef(null)
  return (
    <Layout aboutRef={aboutRef} projectRef={projectRef} skillsRef={skillsRef}>
      <SEO title="Tautvydas" />
      <Banner aboutRef={aboutRef} projectRef={projectRef} />
      <Projects projectRef={projectRef} />
      <Skills skillsRef={skillsRef} />
    </Layout>
  )
}

export default IndexPage
