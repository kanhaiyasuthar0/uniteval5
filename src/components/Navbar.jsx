import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let isLogin =   useSelector((state)=>state.isLogin)
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Navbar</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/employee">Employees</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/employeecreate">Create Employee</Link>
          </li>
          {!isLogin  ? <li class="nav-item">
            <Link to="login" class="nav-link">Login</Link>
          </li> : <li class="nav-item">
            <Link to="login" class="nav-link">Logout</Link>
          </li>}
          
          {/* <li class="nav-item">
            <a class="nav-link">Login</a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar