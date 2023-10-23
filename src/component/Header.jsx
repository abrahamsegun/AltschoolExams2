import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import "../css/Home.css"

const Header = () => {
  return (
    <div className='HeaderDiv'>
      <h1>Altschool Second Exam </h1>
        <div className='logodiv'>
            <div className='logo'>
            <Link to='https://github.com/abrahamsegun'><FaGithub></FaGithub></Link>
            </div>
            <div className='logoAside'>
            <NavLink to="/">Home</NavLink>
          <NavLink to="Repositories">Repositories</NavLink> 
           
            </div>
        </div>
    </div>
  )
}

export default Header
