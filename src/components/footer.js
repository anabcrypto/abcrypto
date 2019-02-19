import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
  render () {
    return (
        <footer className="footer has-background-white" style={{padding:'3rem',}}>
          <div className="level">
            <div className="columns">
              <div className="column">
                <span className="level-left">© ABCrypto {new Date().getFullYear()}, 
                  {` `}
                  all rights reserved.
                </span>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <ul className="level-right">
                  <li className="level-item"><Link to="/about">About</Link></li>
                  <li className="level-item"><Link to="/termsofuse">Terms of Use</Link></li>
                  <li className="level-item"><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer