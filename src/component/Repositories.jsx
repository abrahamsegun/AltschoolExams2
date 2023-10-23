import React, { useEffect, useState } from 'react'
import Eachrepo from './Eachrepo'
import axios from 'axios'

const Repositories = () => {
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
       const rep = await axios.get(`https://api.github.com/users/abrahamsegun/repos?per_page=100`);
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
  return <div className='loading'>Loading ...</div>
  }
  if(Error){
    <div>error: {Error.message}</div>
  }
  return (
    <div>
      
        <Eachrepo handlePageChange={handlePageChange} reps={reps} currentPage={currentPage} totalPages={totalPages} currentItems={currentItems}></Eachrepo>
    </div>
  )
}

export default Repositories
