import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode === "light"?"light":"dark"} bg-${prop.mode === "light"?"light":"dark"}`} >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{prop.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse text-${prop.mode === "light"?"dark":"light"}`} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{prop.about}</Link>
          </li>
          </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${prop.mode === "light"?"dark":"light"} m-2`}>
          <input className="form-check-input" onClick={prop.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
        </div>
      </div>
    </div>
  </nav>
)
}


Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}