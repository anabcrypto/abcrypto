import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
  render () {
    return (
        <footer
        style={{
            background: '#f4f4f4',
            paddingTop: '0px',
          }}
        >
        <ul
        style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            overflow: 'hidden',
          }}
        >
            <li style={{padding: '14px 16px',}}><Link to="/about">About</Link></li>
            <li style={{padding: '14px 16px',}}><Link to="/termsofuse">Terms of Use</Link></li>
            <li style={{padding: '14px 16px',}}><Link to="/contact">Contact</Link></li>
        </ul>
          <span 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              }}
          >© ABCrypto {new Date().getFullYear()}, 
          {` `}
          all rights reserved.
          </span>
        </footer>
    )
  }
}

export default Footer