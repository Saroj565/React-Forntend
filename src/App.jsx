import React from 'react'
import '../src/index.css'
import Props from './components/Props'
import Bgchanger from './components/Bgchanger'
import From from './components/From'
import Navbar from './components/Navbar'
import Grids from './components/Grids'
import Todoapp from './components/Todoapp'

const App = () => {
  return (
    <>
        {/* <Props firstName="saroj" lastName="mandal"></Props> */}
        {/* <Bgchanger></Bgchanger> */}       
        {/* <From></From> */}
        {/* <Navbar></Navbar> */}
        {/* <Grids></Grids> */}
        <Todoapp></Todoapp>
    </>
  )
}

export default App
