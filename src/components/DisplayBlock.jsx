import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blue from './Blue'
import Red from './Red'

const DisplayBlock = () => {
  return (
    <div id="main-section"><Routes>
        {
          <>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blue' element={<Blue />}></Route>
            <Route path='/red' element={<Red />}></Route>
          </>
        }
        </Routes></div>
  )
}

export default DisplayBlock