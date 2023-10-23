import React from 'react'
import { Link } from "react-router-dom"
import "../css/notfound.css"
const NotFound = () => {
  return (
    <div>
      <h1>404 Error - Page Not Found</h1>
      <div className='found'>
      <p>The page you are looking for does not exist.</p>
      <p>Don't panic you can go to the home page </p>

      </div>
      <Link to='/'><button
       className="btn">Go Home</button></Link>
      
    </div>
  )
}

export default NotFound
