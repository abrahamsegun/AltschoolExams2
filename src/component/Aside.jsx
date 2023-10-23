import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../css/aside.css"
import "../App.css"

const ASide = () => {
  const [reps, setReps]= useState([])
  const [Error, setError]= useState(null)
  const [loading, setLoading]=useState(true)
  //pignate
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = reps.slice(indexOfFirstItem, indexOfLastItem);


const totalPages = Math.ceil(reps.length / itemsPerPage);

const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
};


  useEffect(()=>{
    const fetchdata = async()=>{
     try{
       const rep = await axios.get("https://api.github.com/users/abrahamsegun/repos");
       const data = await rep.data;
       setReps(data)
       setLoading(false)
     } catch (error) {
       setError(error)
       setLoading(false)
       console.log(`Your code is having this ${error} error`)
     }
    }
    fetchdata();
 }, [])

 if(loading){
  return <div className='loadingEach'>
            <div>Loading...</div>
        <div>If it presist please go back</div>

  </div>
  }
  if(Error){
    <div>error: {Error.message}</div>
  }
  return (
    <div className='mainrepo'>
        <div className='eachrepo'>
      {currentItems.map((each)=>{
        return(
        <div className='singlerepo' key={each.id}> 
        <div className='single'>
       <div><Link to={`/each/${each.name}`}><p >{each.name}</p> </Link></div>
       <div className='smaller'>{each.language} </div> 
            </div>   

            <div>
            <p className='eachupdate'>{each.updated_at}</p>  

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

    </div>
  )
}

export default ASide

