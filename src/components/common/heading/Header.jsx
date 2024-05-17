import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>All courses</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/journal'>Journal</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          
            {click ? 
              <button className='toggle' onClick={() => setClick(false)}>
                <i className='fa fa-times'></i> 
              </button>
              : 
              <button className='toggle' onClick={() => setClick(true)}>
                <i className='fa fa-bars'></i>
              </button>
            }
          
        </nav>
      </header >
    </>
  )
}

export default Header