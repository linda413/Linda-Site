import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
//import Nav from "../components/nav"
import Header from "../components/header"
import "./index.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header  />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{
              background: `#699D90`,
              width:`100%`,
              margin: `0 auto`,
              height: `10vh`,
          }}
        >
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
