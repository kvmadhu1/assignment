import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="card-body p-2">
    <h5 className="card-title"> Hello</h5>
    <p className="card-text">Click on below links to enter Page</p>
    <div className=''>
    <Link to='/login' href="#" class="btn btn-outline-primary">Go to Log in Page</Link>
    <Link to='/dashboard' href="#" class="btn btn-outline-success">Go to DashBoard Page</Link>
    </div>
  </div>
  )
}
