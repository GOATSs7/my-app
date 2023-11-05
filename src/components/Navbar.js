import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

 
    return ( 

<>
<nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
<div className="container-fluid">



  {/* <a className="navbar-brand" href="/">{props.title}</a> */}

  <a className="navbar-brand" href="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
  {props.title}
</a>


  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">


      <a className="nav-link active" href="/"  aria-current="page" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      Home
</a>

        {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}


      </li>
      <li className="nav-item">

      <a className="nav-link" href="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
  {props.about}
</a>

        {/* <a className="nav-link" href="/">{props.about}</a> */}
      </li>
   
   
    </ul>
    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode==='dark' ? 'Light' : 'Dark'} Mode</label>
</div>
  </div>
</div>
</nav>
</>
       
    )
}

Navbar.propType={ title: PropTypes.string,
    about: PropTypes.string


}