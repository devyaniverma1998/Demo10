import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/style.css';
import '../css/bootstrap.min.css';
export default function Button() {
    return (
        <>
            <div className="content text-start">

                <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                        <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
                    </a>
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars"></i>
                    </a>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fa fa-envelope me-lg-2"></i>
                                <span className="d-none d-lg-inline-flex">Message</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">See all message</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fa fa-bell me-lg-2"></i>
                                <span className="d-none d-lg-inline-flex">Notificatin</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Profile updated</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">New user added</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Password changed</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">See all notifications</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" />
                                <span className="d-none d-lg-inline-flex">John Doe</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">My Profile</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <a href="#" className="dropdown-item">Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Basic Buttons</h6>
                                <div className="m-n2">
                                    <button type="button" className="btn btn-primary m-2">Primary</button>
                                    <button type="button" className="btn btn-secondary m-2">Secondary</button>
                                    <button type="button" className="btn btn-success m-2">Success</button>
                                    <button type="button" className="btn btn-danger m-2">Danger</button>
                                    <button type="button" className="btn btn-warning m-2">Warning</button>
                                    <button type="button" className="btn btn-info m-2">Info</button>
                                    <button type="button" className="btn btn-light m-2">Light</button>
                                    <button type="button" className="btn btn-dark m-2">Dark</button>
                                    <button type="button" className="btn btn-link m-2">Link</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Outline Buttons</h6>
                                <div className="m-n2">
                                    <button type="button" className="btn btn-outline-primary m-2">Primary</button>
                                    <button type="button" className="btn btn-outline-secondary m-2">Secondary</button>
                                    <button type="button" className="btn btn-outline-success m-2">Success</button>
                                    <button type="button" className="btn btn-outline-danger m-2">Danger</button>
                                    <button type="button" className="btn btn-outline-warning m-2">Warning</button>
                                    <button type="button" className="btn btn-outline-info m-2">Info</button>
                                    <button type="button" className="btn btn-outline-light m-2">Light</button>
                                    <button type="button" className="btn btn-outline-dark m-2">Dark</button>
                                    <button type="button" className="btn btn-outline-link m-2">Link</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Rounded Buttons</h6>
                                <div className="m-n2">
                                    <button type="button" className="btn btn-primary rounded-pill m-2">Primary</button>
                                    <button type="button" className="btn btn-secondary rounded-pill m-2">Secondary</button>
                                    <button type="button" className="btn btn-success rounded-pill m-2">Success</button>
                                    <button type="button" className="btn btn-danger rounded-pill m-2">Danger</button>
                                    <button type="button" className="btn btn-warning rounded-pill m-2">Warning</button>
                                    <button type="button" className="btn btn-info rounded-pill m-2">Info</button>
                                    <button type="button" className="btn btn-light rounded-pill m-2">Light</button>
                                    <button type="button" className="btn btn-dark rounded-pill m-2">Dark</button>
                                    <button type="button" className="btn btn-link rounded-pill m-2">Link</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Buttons Size</h6>
                                <div className="m-n2">
                                    <button type="button" className="btn btn-lg btn-primary m-2">Large Button (btn-lg)</button>
                                    <button type="button" className="btn btn-lg btn-secondary m-2">Large Button (btn-lg)</button>
                                    <button type="button" className="btn btn-sm btn-primary m-2">Small Button (btn-sm)</button>
                                    <button type="button" className="btn btn-sm btn-secondary m-2">Small Button (btn-sm)</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Icon Buttons</h6>
                                <div className="m-n2">
                                    <button type="button" className="btn btn-square btn-primary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-primary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-secondary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-secondary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-success m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-success m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-danger m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-danger m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-warning m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-info m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-info m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-dark m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-dark m-2"><i className="fa fa-home"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Icon Buttons Size</h6>
                                <div className="m-n2">
                                    <button type="button" className="btn btn-lg btn-lg-square btn-primary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-lg btn-lg-square btn-outline-primary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-primary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-primary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-sm btn-sm-square btn-primary m-2"><i className="fa fa-home"></i></button>
                                    <button type="button" className="btn btn-sm btn-sm-square btn-outline-primary m-2"><i className="fa fa-home"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Icon & Text Buttons</h6>
                                <div className="m-n2">
                                    <button type="button" className="btn btn-primary m-2"><i className="fa fa-home me-2"></i>Icon Left</button>
                                    <button type="button" className="btn btn-outline-primary m-2"><i className="fa fa-home me-2"></i>Icon Left</button>
                                    <button type="button" className="btn btn-primary m-2">Icon Right<i className="fa fa-home ms-2"></i></button>
                                    <button type="button" className="btn btn-outline-primary m-2">Icon Right<i className="fa fa-home ms-2"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Block Buttons</h6>
                                <div className="m-n2">
                                    <button className="btn btn-primary w-100 m-2" type="button">Button</button>
                                    <button className="btn btn-outline-primary w-100 m-2" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Basic Button Group</h6>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary">Left</button>
                                    <button type="button" className="btn btn-primary">Middle</button>
                                    <button type="button" className="btn btn-primary">Right</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Mixed Button Group</h6>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-danger">Left</button>
                                    <button type="button" className="btn btn-warning">Middle</button>
                                    <button type="button" className="btn btn-success">Right</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Outlined Button Group</h6>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-outline-primary">Left</button>
                                    <button type="button" className="btn btn-outline-primary">Middle</button>
                                    <button type="button" className="btn btn-outline-primary">Right</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Checkbox Button Group</h6>
                                <div className="btn-group" role="group">
                                    <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

                                    <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

                                    <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Radio Button Group</h6>
                                <div className="btn-group" role="group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                                        checked />
                                    <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Button Toolbar</h6>
                                <div className="btn-toolbar" role="toolbar">
                                    <div className="btn-group me-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary">1</button>
                                        <button type="button" className="btn btn-primary">2</button>
                                        <button type="button" className="btn btn-primary">3</button>
                                        <button type="button" className="btn btn-primary">4</button>
                                    </div>
                                    <div className="btn-group me-2" role="group" aria-label="Second group">
                                        <button type="button" className="btn btn-secondary">5</button>
                                        <button type="button" className="btn btn-secondary">6</button>
                                        <button type="button" className="btn btn-secondary">7</button>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Third group">
                                        <button type="button" className="btn btn-info">8</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Vertical Button Group</h6>
                                <div className="btn-group-vertical me-2" role="group">
                                    <button type="button" className="btn btn-primary">Left</button>
                                    <button type="button" className="btn btn-primary">Middle</button>
                                    <button type="button" className="btn btn-primary">Right</button>
                                </div>
                                <div className="btn-group-vertical" role="group">
                                    <button type="button" className="btn btn-danger">Left</button>
                                    <button type="button" className="btn btn-warning">Middle</button>
                                    <button type="button" className="btn btn-success">Right</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Vertical Button Group (Checkbox & Radio)</h6>
                                <div className="btn-group-vertical me-2" role="group">
                                    <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

                                    <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

                                    <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
                                </div>
                                <div className="btn-group-vertical" role="group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                                        checked />
                                    <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                    <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light rounded-top p-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center text-sm-start">
                                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="col-12 col-sm-6 text-center text-sm-end">

                                Designed By <a href="/">Dev</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}