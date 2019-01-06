import React from 'react'
import Link from 'gatsby-link'

 const BlogPage = ({ data }) => (
   <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
          <div key={ post.node.id }>
              <h3>{post.node.frontmatter.title}</h3>
              <br />
              <br />
              <Link to={post.node.frontmatter.path}>Read More</Link>
              <br />
              <hr />
          </div>
      ))}
    </div>
  )

export const pageQuery = graphql`
    query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
    }
`


export default BlogPage