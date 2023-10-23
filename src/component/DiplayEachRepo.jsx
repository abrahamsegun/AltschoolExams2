import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom"
import "../css/display.css"


const DiplayEachRepo = () => {
  const { repoName } = useParams();
  const [repository, setRepository] = useState({})

  useEffect(()=>{
    const fetchdata = async()=>{
     try{
       const rep = await axios.get(`https://api.github.com/repos/abrahamsegun/${repoName}`);
       const data = await rep.data;
      // const dadada= data.find((r) => r.name === repoName);
       setRepository(data)
     } catch (error) {
       console.log(error)
     }
    }
    fetchdata();
 }, [repoName])

    if (!repository) {
      return <div className='loadingEach'>
        <div>Loading...</div>
        <div>If it presist please go back</div>

       <Link to='/'><button
       className="btn">Go Home</button></Link>
  
         </div>;
    }



  return (
    
    <section className="bigwahala">
    <h2>{repository.name}</h2>

    <br/><br/>
    <ul className='uldisplay'>
      <li>Languages: {repository.language ? repository.language : "NONE"}</li>
      <li>Stars: {repository.stargazers_count}</li>
      <li>Forks: {repository.forks_count}</li>
      </ul>
                  <hr/>
                  <div className='hr'>
                    <ul>
                  
                      <div className='issuesdiv'>
                      
                      <p>Issues:</p>  <p>{repository.open_issues_count > 0 ? `${repository.open_issues_count} open issue(s)` :
                            'No issues'}</p> 
                      </div>
                     <div className='visibitydiv'>
                  
                  <p> Visibity:  </p> 
                   <p>{repository.visibility}</p>
                     </div>
                     
                    </ul>
                  </div>
                  <hr />
          <div className='ButtonGit'>
            <button><Link to={`https://github.com/abrahamsegun/${repoName}`}>To to github repository</Link></button>
          </div>
    </section>

  
  )
}

export default DiplayEachRepo


