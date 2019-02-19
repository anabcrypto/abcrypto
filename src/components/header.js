import React from "react"
import { Link } from "gatsby"

const Header = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render () {
      return (
       
        <header>
        <nav
          className="navbar"
          role="navigation"
          aria-label="main-navigation"
        >
        <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" alt="Logo">
          Home
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navBurger">
            <span />
            <span />
            <span />
          </a>
          </div>

          <div id="navBurger" className="navbar-menu">
          <div className="navbar-start  has-text-centered">
            <Link className="navbar-item" to="/topics">Topics</Link>
            <Link className="navbar-item" to="/blog">Blog</Link>
            <a className="navbar-item" href="https://github.com/anabcrypto/abcrypto">Github</a>
          </div>

          <div className="navbar-end has-text-centered">
        <div className="navbar-item field">
            <span className="select">
              <select>
                <option selected>English</option>
                <option>Italian</option>
                <option>Arabic</option>
              </select>
            </span> 
          </div>
          </div>

          </div>
        </div>
        </nav>
    </header>
    
  )
  }
}



export default Header

