import React from 'react'
import Layout from "../../components/layout"
import { graphql } from "gatsby"

class ThankYou extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
  
  return (
  <Layout location={this.props.location} title={siteTitle}>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Layout>
  )
  }
  }

  export default ThankYou

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`