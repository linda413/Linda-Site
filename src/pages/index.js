import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import cover from '../images/LindaCover.jpg'
import {  Row , Col, Container, Image} from "react-bootstrap";
import Portfolio from "./portfolio"
const IndexPage = () => (
<>
      <Container fluid 
      style={{
        position: `relative`,
        height:`100vh`,
        width:`96vw`,
      }}
      >
        <Row 
        style = {{
          display: `flex`,
          width: `50%`,
          justifyContent: `center`,
        }}
        >
          <Navbar 
          className="nav" expand="lg">
          <Navbar.Brand href="#home"> </Navbar.Brand>
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
      </Row>
      <Row className="cover" >
        <Col className="intro" 
        md={{ span: 6 }} xs={{ span: 12 }} >  
           <ScrollAnimation animateIn='fadeInLeft'>
              <Row className = "introParagraph">
                Hiya! 
                <br/>                
                My name is Linda Li.
                <br/>
                Born in Taiwan, raised in Shanghai, I am an aspiring CS Student currently located in California on her transformation to a full fledged Software Engineer. </Row>    
            </ScrollAnimation>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 12 }}  className="coverVisual">
          <ScrollAnimation duration={2} animateIn='fadeIn' >
            <div className="pinkDiv" ></div>
          </ScrollAnimation>    
          <ScrollAnimation delay={800} duration={2} animateIn='fadeIn'>
            <Image  style = {{height:`80%`}}  className="lindaImage" src={cover} fluid ></Image>
          </ScrollAnimation>                          
        </Col>
      </Row> 
      
    </Container>
    <Portfolio></Portfolio>
    </>

)

export default IndexPage
