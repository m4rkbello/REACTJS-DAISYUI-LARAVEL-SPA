import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <div className='bg-red-200 min-h-screen'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
        <Link to="/">
        <a className="btn btn-ghost text-xl">M4RKBELLO</a>
        </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/register"><a>Register</a></Link>
          </li>
            <li>
              <details>
                <summary>
                  OHAHA
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-6'>

        <Routes>
        <Route exact path="/home" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={ <Register />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
