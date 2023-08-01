import { Route, Routes, Link } from 'react-router-dom'
import DisplayBlock from './components/DisplayBlock'
import Navbar from './components/Navbar'


function App() {


  return (
    <>
     <div id="container">
        <Navbar />
        <DisplayBlock />
      </div>
    </>
  )
}

export default App
