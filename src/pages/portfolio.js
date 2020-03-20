import React from "react"
import { Link } from "gatsby"
import Carousel from 'react-bootstrap/Carousel'
import Layout from "../layouts"
import BitatUber from "../images/BitatUber.jpg"
import devTeam from "../images/working.jpg"
import PostCon from "../images/postcon.jpg"

const Portfolio = () => (
  <Layout>
    <h1> Portfolio</h1>
    <div className="DevBitCarousel">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {BitatUber}
          alt="WebDevTeamAtUber"
        />
        <Carousel.Caption>
          <h4>OG Web Team</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={devTeam}
          alt="Working"
        />
        <Carousel.Caption>
          <h4>Working</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PostCon}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h4>Attending PostCon</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
