import '../css/style.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Sidebar() {
    return (
        <div className="sidebar text-start pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <Link to="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                </Link>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="/img/user.jpg" alt="User" />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <Link to="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-laptop me-2"></i>Elements
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/button" className="dropdown-item">Buttons</Link>
                            <Link to="/typography" className="dropdown-item">Typography</Link>
                            <Link to="/element" className="dropdown-item"> Elements</Link>
                        </div>
                    </div>
                    <Link to="/widget" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</Link>
                    <Link to="/form" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</Link>
                    <Link to="/table" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</Link>
                    <Link to="/chart" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</Link>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="far fa-file-alt me-2"></i>Pages
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/signin" className="dropdown-item">Sign In</Link>
                            <Link to="/signup" className="dropdown-item">Sign Up</Link>
                            <Link to="/blank" className="dropdown-item">Blank Page</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
