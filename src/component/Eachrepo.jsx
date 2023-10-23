import React from 'react'
import "../css/eachrepo.css"
import "../App.css"
import {DiplayEachRepo} from "../Default"
import {Link} from "react-router-dom"

const Eachrepo = ({handlePageChange , currentItems, totalPages, currentPage, reps}) => {
  return (
    <div className='eachrepo'>
      {currentItems.map((each)=>{
        return(
        <div className='singlerepo' key={each.id}> 
        <div className='single' >
         <div id='smallerme'><Link to={`/each/${each.name}`}> <h2>{each.name}</h2>  </Link></div>
            </div> 

            <div className='eachupdate' >
            <p id='smalleru'>{each.language}</p> 
              </div> 
           
              </div>)
      })}
      

      <div>
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
      </div>

    </div>
  )
}

export default Eachrepo
