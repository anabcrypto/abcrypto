import React from "react"
import Layout from "../components/layout" 
import { graphql } from "gatsby"

class About extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1 className="title">Terms of Use</h1>
        <h2 className="subtitle"> 
          The web app is under the <a href="https://choosealicense.com/licenses/apache-2.0/">Apache License 2.0</a> && the posts are distributed under the <a href="https://creativecommons.org/licenses/by-sa/2.5/">Creative Commons Attribution-ShareAlike license</a> (CC BY-SA 2.5).
        </h2>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`