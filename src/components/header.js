import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import santaCruz from '../images/santaCruz.jpg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = ({ siteTitle }) => (
  <header
      style={{
      marginTop:`0`,
      marginBottom: `1.45rem`,
    }}
  >
    <div 
    className="headerImg" 
    style={{ backgroundImage: `url(${santaCruz})`
    }}>
    <>
      <Navbar expand="lg">
      <Navbar.Brand href="#home"> Welcome to  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <NavDropdown title="And More!" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Belief</NavDropdown.Item>
            <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
            <NavDropdown.Item href="/music">Music</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </>
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
