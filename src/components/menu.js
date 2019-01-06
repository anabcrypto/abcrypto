import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div style={{ 
        background: 'black',
        paddingTop: '50px',
     }}>
      
     <ul style={{ 
         listStyle: 'none',
         display: 'flex',
         justifyContent: 'space-evenly',
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/docs">Docs</Link></li>
        <li><Link to="/blog">Blog</Link></li>
     </ul>

    </div>
  )

  export  default Menu