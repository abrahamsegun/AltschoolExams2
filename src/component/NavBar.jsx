import React from 'react'
import "../css/navbar.css"

const NavBar = ({Profile}) => {
             
    
  return (
    <div className='navbar'>
    <img src={Profile.avatar_url} alt="Photo" />
    <h4>{Profile.name}</h4>
    <p>{Profile.login}</p>
    </div>
  )
}

export default NavBar
