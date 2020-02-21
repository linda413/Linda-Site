import React from 'react'
import Link from 'gatsby-link'

const Nav = () =>(
    <div style={{
        background:'#f4f4f4',
        paddingTop: '10px'
    }}>
        <ul style={{
            listStyle: 'none',
            display:'flex',
            justifyContent: 'space-evenly',
            marginBottom:`0`

        }}>
            <li><Link to='/'>Home</Link></li> 
            <li><Link to='/about'>About</Link></li> 
            <li><Link to='/project'>Projects</Link></li> 
 
        </ul>
    </div>
) 

export default Nav