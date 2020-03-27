import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from "../layouts"

const BlogPage = ({data}) => (
    <Layout>
    <div>
        <h1> Latest Blog posts</h1>
        {data.allMarkdownRemark.edges.map(post =>(
            <div key = {post.node.id}>
                <h3> {post.node.frontmatter.title}</h3>
                <small>Posted By {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link to = {post.node.frontmatter.path}> Read more</Link>
                <br />
                <br/>
                <hr />
            </div>
        ))}
    </div>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark{
              edges{
                node{
                  id
                  frontmatter{
                    path
                    title
                    date
                    author
                  }
                  excerpt
                }
              }
        }
        
    }
`

export default BlogPage