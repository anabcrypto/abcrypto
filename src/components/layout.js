import React from "react"

import { rhythm, scale } from "../utils/typography"
import Footer from "./footer"
import Header from "./header"
import 'bulma/css/bulma.css'

class Layout extends React.Component {
  render() {
    const { title, children, location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="title is-3">{title}</h1>
      )
    } else {
      header = (
        <h1 className="title is-1">{title}</h1>
      )
    }
    return (
      <div>
      <Header />
      {/*<nav className="breadcrumb is-centered" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
*/}
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          background: 'white',
        }}
      >
        {header}
        {children}
      </div>
      <Footer />
      </div>
    )
  }
}

export default Layout
