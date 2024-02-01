import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Maria Yuzba</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" end>Home</NavLink> 
                        </li>
                        <li className="nav-item">
                        <NavLink to="/About" end>About</NavLink> 
                        </li>
                        <li className="nav-item">
                        <NavLink to="/ProjectsGallery" end>Projects</NavLink> 
                        </li>
                        <li className="nav-item">
                        <NavLink to="/Resume" end>Resume</NavLink> 
                        </li>
                        <li className="nav-item">
                        <NavLink to="/Contacts" end>Contacts</NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;