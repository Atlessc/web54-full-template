import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })


  return (
    <div className="header">
      <p>[NAME]</p>
      {(screenWidth > 499) && (
        <div className="nav-links">
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/projects-gallary">Projects</Link>
          <Link className="nav-item" to="/contact">Contact</Link>
        </div>
      )}
      {(toggleMenu === true) && screenWidth < 500 && (
        <div className="nav-links">
          <Link onClick={toggleNav} className="nav-item" to="/">Home</Link>
          <Link onClick={toggleNav} className="nav-item" to="/projects-gallary">Projects</Link>
          <Link onClick={toggleNav} className="nav-item" to="/contact">Contact</Link>
        </div>
      )}
      {/* <div className="nav-links">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/projects-gallary">Projects</Link>
        <Link className="nav-item" to="/contact">Contact</Link>
      </div> */}
      {screenWidth < 501 && (
        <div className="mobile-menu" onClick={toggleNav}>
          {toggleMenu ? (
            <div className="menu-icon">&times;</div>
          ) : (
            <div className="menu-icon">&#9776;</div>
          )}
          </div>
        )
      }
    </div>
  )
}