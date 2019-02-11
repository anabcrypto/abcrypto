import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render () {
      return (
        <header
      style={{
        background: `fuchsia`,
      }}
    >
        <nav>
        <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          overflow: 'hidden',
      }}
      >
        {/* <li style={{padding: '14px 16px',}}>
          <Link to="/"><img Logo></Link> 
        </li>
        
        <Image
                src={Logo}
                width="50px"
                alt="Portfolio Logo"
                onClick={home.onClick}
                style={{
                  cursor: 'pointer',
                }}
              />

        */}
        <li style={{padding: '14px 16px',}}>
          <Link to="/topics">Topics</Link>
        </li>
        <li style={{padding: '14px 16px',}}>
          <Link to="/blog">Blog</Link>
        </li>
        <li style={{padding: '14px 16px',}}>
          <a href="https://github.com/anabcrypto/abcrypto">Github</a>
        </li>
      </ul>
        </nav>
        PATH > OK > Feodje
    </header>
      )
  }
}

export default Header