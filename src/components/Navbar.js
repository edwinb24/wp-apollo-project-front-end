import React from "react"
import {NavLink, Link} from "react-router-dom"

function Navbar() {
  return(
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/user/1">User</NavLink>
      </li>
    </ul>
  )
}

export default Navbar
