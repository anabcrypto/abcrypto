import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
    <div>
        <Layout>
            <Header  headerText="That's a header"  />
            <h1>{data.site.siteMetadata.title}</h1>
            <h1>About ABCrypto</h1>
            </Layout>
    </div>
)

export const query = graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
`      