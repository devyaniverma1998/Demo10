import { Link } from "react-router-dom";
import '../css/style.css';
import '../css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <Link to="/" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
            </Link>
            <Link to="/" className="sidebar-toggler flex-shrink-0">
                <i className="fa fa-bars"></i>
            </Link>
            <form className="d-none d-md-flex ms-4">
                <input className="form-control border-0" type="search" placeholder="Search" />
            </form>
            <div className="navbar-nav align-items-center ms-auto">
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-envelope me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Message</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <Link to="/" className="dropdown-item">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="/img/user.jpg" alt="User" />
                                <div className="ms-2">
                                    <h6 className="fw-normal mb-0">John sent you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link to="/" className="dropdown-item text-center">See all messages</Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-bell me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Notifications</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <Link to="/" className="dropdown-item">
                            <h6 className="fw-normal mb-0">Profile updated</h6>
                            <small>15 minutes ago</small>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link to="/" className="dropdown-item text-center">See all notifications</Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img className="rounded-circle me-lg-2" src="/img/user.jpg" alt="User" />
                        <span className="d-none d-lg-inline-flex">John Doe</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <Link to="/" className="dropdown-item">My Profile</Link>
                        <Link to="/" className="dropdown-item">Settings</Link>
                        <Link to="/" className="dropdown-item">Log Out</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
