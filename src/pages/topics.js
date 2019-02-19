import React from "react"
import Layout from "../components/layout" 
import { Link, graphql } from "gatsby"

class About extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1 className="title">Topics</h1>
        <h1 className="subtitle"> 
          <h2 className="subtitle">Solidity</h2>
          <p><Link to="/language/solidity/whatissolidity/">What is Solidity?</Link></p>
          <p><Link to="/language/solidity/getstarted/">Let's get started</Link></p>
          <h2 className="subtitle">Ads</h2>
          <p><Link to="/revenue/ad/cryptoadvertising/">Some possibilities to gets ads on your crypto website/app</Link></p>
        </h1>
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