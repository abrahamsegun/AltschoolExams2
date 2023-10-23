import React from 'react' 
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import {Root1, Repositories, DiplayEachRepo,NotFound, Root2, Aside} from './Default'
import Index from '.'


function App() {
const router =  createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Root1 />}>
        <Route path="/" element={<Index />}>
          <Route path="Aside" element={<Aside/>}></Route>
        </Route>
        <Route path="Repositories" element={<Repositories />}>
        <Route path='each/:repoName' element={<DiplayEachRepo />}></Route>
        </ Route>
        <Route path='each/:repoName' element={<DiplayEachRepo />}></Route>

       
        <Route path='*' element={<NotFound></NotFound>} ></Route>
     </Route>
    )
  )
  return (

<RouterProvider router={router}></RouterProvider> 
  );
}

export default App
