import React from 'react'
import {Outlet} from "react-router-dom"
import {Header} from '../Default'


const Root1 = () => {
  return (
    <div>
        <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Root1
 