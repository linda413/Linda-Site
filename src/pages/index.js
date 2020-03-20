import React from "react"
import { Link } from "gatsby"
//import Image from 'react-bootstrap/Image'
import Layout from "../layouts"
// import Image from "../components/image"
//import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Animated} from "react-animated-css";


const IndexPage = () => (
  <Layout>
    <Animated animationIn="fadeInLeft"  animationInDuration={3000} isVisible={true}>
      <h1 style={{ textAlign: `center` }}>Hi there, my name is Linda</h1>
    </Animated>
    <br/>
    <br/>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum mauris nisi, molestie faucibus risus posuere vitae. Proin ac nisl vel erat efficitur aliquet eu ac ante. Pellentesque eu odio in purus volutpat euismod. 
      Aenean ac nunc arcu. Integer eget lorem accumsan, interdum arcu gravida, molestie augue. Morbi sit amet commodo metus, non tincidunt dui. Mauris vitae mi eu lectus ornare aliquam. 
      Sed at vehicula erat, et consectetur neque. Duis tempor, nibh quis sagittis luctus, arcu tellus sodales nunc, non congue quam velit eu massa. 
      Nunc ornare lectus a purus gravida pellentesque. Aliquam viverra sem turpis, vitae aliquet nisl ornare non. Praesent sodales mi nec ultricies posuere. Quisque non ipsum urna. Etiam vestibulum et diam sed posuere. 
      Integer ac velit ut massa blandit dignissim nec ac dui. Fusce tincidunt ullamcorper nunc, sed auctor urna tincidunt eu. </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image style={{ minHeight: "120px", width: "110%" }}/> */}
    </div>
    <Link to="/about">Go to page 2</Link>
  </Layout>
)

export default IndexPage
