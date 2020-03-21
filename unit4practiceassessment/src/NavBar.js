import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <h1>YOUTUBE</h1>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/about"}>ABOUT</NavLink>
        </nav>
    )
}

export default NavBar;