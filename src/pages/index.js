import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import cover from '../images/LindaCover.jpg'
import {  Row , Col, Container, Image, Card} from "react-bootstrap";

const IndexPage = () => (

      <Container fluid 
      style={{
        position: `relative`,
      }}
      >
        <Navbar 
        className="cover" style={{
          zIndex:`0`,}}
       expand="lg">
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
      <Row   
      className="cover"

       style={{
        backgroundColor:`#FFE7DD`,
        zIndex:`-1`
        }} 
        >
        <Col className="intro" 
        md={{ span: 6 }} xs={{ span: 12 }} >     
              <Row 
                style={{
                  backgroundColor:`inherit`,
                  border:`none`,
                  textAlign:`center`,
                  lineHeight:`2.5`,
                  paddingLeft:`15%`,
                  paddingRight:`15%`
                }}
                >Hiya! 
                <br/>
                
                My name is Linda Li.
                <br/>
                
                Born in Taiwan, raised in Shanghai, I am an aspiring CS Student currently located in California on her transformation to a full fledged Software Engineer. </Row>
     
        </Col>
        <Col   
        md={{ span: 6 }} xs={{ span: 12 }}  
        style={{
            padding:`0`
            
          }}>
          <Image
            src={cover} fluid ></Image>
        </Col>
      </Row>   
    </Container>

)

export default IndexPage
