import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './logo.svg'

function Navbar({ username }) {
return (
    <nav className="navbar">
        <Link to = "/"> <img src={logo} alt="logo" className = "logo"/> </Link>
        {/* <Link to="/" className="big-link">Problem Solver</Link> */}
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/learn">Learn!</Link></li> {/* Use Link for navigation */}
            <li><Link to="/about">About</Link></li>
            <li>{username ? <Link to="/login" className = "bold"> {username} </Link> : <Link to="/login">Login</Link>}</li>
        </ul>
    </nav>
);
}

export default Navbar;