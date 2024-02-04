import React from 'react';
import { Link, NavLink } from "react-router-dom";
// import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Maria Yuzba
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink 
                            to="/" 
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Home
                            </NavLink> 
                        </li>

                        <li className="nav-item">
                            <NavLink 
                            to="/About" 
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            About
                            </NavLink> 
                        </li>

                        <li className="nav-item">
                            <NavLink 
                            to="/Projects" 
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Projects
                            </NavLink> 
                        </li>

                        <li className="nav-item">
                            <NavLink 
                            to="/Resume" 
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Resume
                            </NavLink> 
                        </li>

                        <li className="nav-item">
                            <NavLink 
                            to="/Contacts" 
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Contacts
                            </NavLink> 
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;