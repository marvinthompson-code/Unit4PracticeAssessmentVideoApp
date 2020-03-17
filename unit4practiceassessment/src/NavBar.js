import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/video"}>VIDEO</NavLink>
            <NavLink to={"/about"}>ABOUT</NavLink>
        </nav>
    )
}

export default NavBar;