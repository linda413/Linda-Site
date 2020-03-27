import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import cover from '../images/LindaDeathStarGaze.jpg'
// import { Image} from "react-bootstrap";
// import { Col } from "react-bootstrap"
const Header = ({ siteTitle }) => (
  <header
      style={{
      marginTop:`0`,
      marginBottom: `1.45rem`,
    }}
  >
      
    < div
    style={{
      marginTop:`0`,
      position : `relative`,
    }}
    >
      

    </ div>
      <div     
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
