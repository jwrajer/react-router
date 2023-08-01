import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <div id="navbar">
        <Link to='/'>Home</Link>
        <Link className='blue' to='/blue'>Blue</Link>
        <Link className='red' to='/red'>Red</Link>
        <Link className='green' to='/green'>Green</Link>
        <Link className='purple' to='/purple'>Purple</Link>
       </div>
    </>
  )
}

export default Navbar