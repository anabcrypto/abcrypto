import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <Layout>
        <Link to="/contact/">Contact</Link>
        <br/>
        <a href="https://getsy.io">Getsy</a>
        <Header headerText="Ok" />
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="https://mysite.com/example" />
        </Helmet>
        <h1>Hello world!</h1>
        <p>What a world :)</p>
        <Header />
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        </Layout>
        </div>
)