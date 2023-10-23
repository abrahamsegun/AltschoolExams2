import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import './App.css'
import { Aside, NavBar } from './Default'



function Index() {
    const [ Profile, setProfile]= useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  useEffect(()=>{
     const fetchdata = async()=>{
      try{
        const rep = await axios.get("https://api.github.com/users/abrahamsegun");
        const data = await rep.data;
        setProfile(data)
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
  if(error){
    <div>Error: {error.message}</div>
  }
    return (
      <div className="appDiv">
        <NavBar Profile={Profile}/>
        <Aside></Aside>
  
      </div>
  
    );
  }
export default Index
