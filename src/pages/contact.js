import React from "react"
import Layout from "../components/layout" 
import { graphql } from "gatsby"

class About extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
      <form method="post" action="#">
          <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
          </div>
          <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
          </ul>
      </form>
      </form>
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