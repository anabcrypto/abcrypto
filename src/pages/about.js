import React from "react"
import Layout from "../components/layout" 
import { graphql } from "gatsby"

class About extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1 className="title">About</h1>
        <h1 className="subtitle">ABCrypto is a website that is being built with the purpose of describing the cryptocurrency world.</h1>
        <h1 className="subtitle">Inspired by the MDN Web Docs and because I myself couldn't find enough info on the topic, I am writing posts as I approach and understand something about or in a way related to cryptos.</h1>
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
