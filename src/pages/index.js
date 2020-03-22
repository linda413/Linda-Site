import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const IndexPage = () => (
  <Layout>
    <ScrollAnimation animateIn="fadeIn">
      <h1 > Hi there, my name is Linda </h1>
    </ScrollAnimation>
    <br/>
    <br/>
    <ScrollAnimation animateIn="fadeIn">
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum mauris nisi, molestie faucibus risus posuere vitae. Proin ac nisl vel erat efficitur aliquet eu ac ante. Pellentesque eu odio in purus volutpat euismod. 
      Aenean ac nunc arcu. Integer eget lorem accumsan, interdum arcu gravida, molestie augue. Morbi sit amet commodo metus, non tincidunt dui. Mauris vitae mi eu lectus ornare aliquam. 
      Sed at vehicula erat, et consectetur neque. Duis tempor, nibh quis sagittis luctus, arcu tellus sodales nunc, non congue quam velit eu massa. 
      Nunc ornare lectus a purus gravida pellentesque. Aliquam viverra sem turpis, vitae aliquet nisl ornare non. Praesent sodales mi nec ultricies posuere. Quisque non ipsum urna. Etiam vestibulum et diam sed posuere. 
      Integer ac velit ut massa blandit dignissim nec ac dui. Fusce tincidunt ullamcorper nunc, sed auctor urna tincidunt eu. </p>
    </ScrollAnimation>
    <Link to="/portfolio">Go to page 2</Link>
  </Layout>
)

export default IndexPage
