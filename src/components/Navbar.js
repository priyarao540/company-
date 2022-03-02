import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <div>
            <div className='topnav'>
            <Link to='/' className='nav'><li>Home</li></Link>
            <Link to='/about' className='nav'><li>About</li></Link>
            <Link to='/login' className='nav'><li>Login</li></Link> 
            <Link to='/register' className='nav'><li>Register</li></Link>


            </div>
        </div>
    );
    
}
export default Navbar