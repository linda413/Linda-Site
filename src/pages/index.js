import React from "react"
import { Link } from "gatsby"


import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Christ in You is the hope of Glory</h1>
    <p>Let's take a walk on the Wild side</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image style={{ minHeight: "120px", width: "110%" }}/>
    </div>
    <Link to="/about">Go to page 2</Link>
  </Layout>
)

export default IndexPage
