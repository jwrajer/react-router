import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blue from './Blue'
import Red from './Red'
import Green from './Green'
import Purple from './Purple'

const DisplayBlock = () => {
  return (
    <div id="main-section"><Routes>
        {
          <>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blue' element={<Blue />}></Route>
            <Route path='/red' element={<Red />}></Route>
            <Route path='/green' element={<Green />}></Route>
            <Route path='/purple' element={<Purple />}></Route>
          </>
        }
        </Routes></div>
  )
}

export default DisplayBlock