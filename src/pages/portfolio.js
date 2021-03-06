import React from "react"
import Bit from "../images/BitProject.jpg"
import coc from "../images/coc.png"
import ScrollAnimation from 'react-animate-on-scroll';

import { Row, Image,  Col } from "react-bootstrap"

const Portfolio = () => (
<>
    <br/>
    <br/>
    <ScrollAnimation animateIn="fadeIn">
      <Row >
        <Col >
          <Image src={Bit} fluid rounded/>
        </Col>
        <Col>
            <h6> Web Development at Bit</h6>
            <p className="portfolio_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum mauris nisi, molestie faucibus risus posuere vitae. Proin ac nisl vel erat efficitur aliquet eu ac ante. Pellentesque eu odio in purus volutpat euismod. 
            Aenean ac nunc arcu. Integer eget lorem accumsan, interdum arcu gravida, molestie augue. Morbi sit amet commodo metus, non tincidunt dui. Mauris vitae mi eu lectus ornare aliquam. 
            Sed at vehicula erat, et consectetur neque. </p>         
        </Col>
      </Row> 
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
      <Row >
        <Col >
          <Image src={coc} fluid rounded/>
        </Col>
        <Col>
            <h6> President at Christians On Campus </h6>
            <p className="portfolio_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum mauris nisi, molestie faucibus risus posuere vitae. Proin ac nisl vel erat efficitur aliquet eu ac ante. Pellentesque eu odio in purus volutpat euismod. 
            Aenean ac nunc arcu. Integer eget lorem accumsan, interdum arcu gravida, molestie augue. Morbi sit amet commodo metus, non tincidunt dui. Mauris vitae mi eu lectus ornare aliquam. 
            Sed at vehicula erat, et consectetur neque. </p>         
        </Col>
      </Row>  
      </ScrollAnimation>
      
    </>

)

export default Portfolio
