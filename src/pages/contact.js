import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Layout>
        <Link to="/contact/">Contact</Link>
        <br/>
        <a href="https://getsy.io">Getsy</a>
        <Header headerText="Ok" />
        <h1>Contact me </h1>
        <p>What a world :)</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
    </div>
)
