import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-primary text-white">
        <nav className="nav justify-content-center border border-primary p-2">
          <div className="navbar-brand mb-0 fs-1">Employees Record</div>
        </nav>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
     
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

              <li className="nav-item">
              <NavLink to='/'  className="nav-link" href="#">
              Home
            </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to='/login' className="nav-link" aria-current="page" href="#">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/dashboard' className="nav-link" href="#">
                    DashBoard
                  </NavLink>
                </li>           
        
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
