import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className='navbar-menu-list'>
                    <div className='logo'>
                        <h1>Shivam Gupta</h1>
                    </div>
                    <div className='list-menu'>
                        <ul  className= "list_item">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Education'>Education</Link></li>
                            <li><Link to='/Skils'>Skils</Link></li>
                            <li><Link to='/Exprience'>Exprience</Link></li>
                            <li><Link to='/Project'>Project</Link></li>
                        </ul>
                    </div>
            </nav>
             

        </>
    )
}
export default Navbar