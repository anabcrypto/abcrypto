import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <h1>NOT FOUND</h1>
    <p>This page doesn&#39;t exist... <span role="img" aria-label="face screaming">😱</span></p>
  </Layout>
)

export default NotFoundPage