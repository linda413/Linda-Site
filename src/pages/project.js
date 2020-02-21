import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Project" />
    <h1>Hi from the Project page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectPage
