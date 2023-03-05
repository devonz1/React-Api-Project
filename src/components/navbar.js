import { NavLink } from 'react-router-dom'
import './navbar.css'




const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">

                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/create">Create</NavLink>
                        </li>
                        <li>
                            <NavLink to="/update">Update</NavLink>
                        </li>
                        <li>
                            <NavLink to='/read'>Read</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar