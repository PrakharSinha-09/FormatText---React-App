import React from 'react'
import PropTypes from 'prop-types'
// import {
//   Link
// } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{color:props.mode==='dark'?'white':'black'}}>Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color:props.mode==='dark'?'white':'black'}}>{props.aboutText}</Link>
            </li> */}

          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode2} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">💙</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">🌑</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

/*This is for our understanding so that we can provide data type to the our attriute and in future we don't send any other value whatever type of data you will be sending, ensure that you provide the dataytype..this is a good practice*/
Navbar.propTypes = {
  title: PropTypes.string,
  homeText: PropTypes.string
}

//We can set default properties too, will only work if the corresponding value isn't set while calling the component
Navbar.defaultProps = {
  title: "Strand"
}