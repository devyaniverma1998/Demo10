import '../css/style.css';
import '../css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Widget() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <>
            <div className="content">

                <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                    <a href="/" className="navbar-brand d-flex d-lg-none me-4">
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
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <div className="h-100 bg-light rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h6 className="mb-0">Messages</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pt-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-12 col-md-6 col-xl-4">
                            <div className="h-100 bg-light rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Calender</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div id="calender"></div>
                            </div>
                        </div> */}
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <div className="h-100 bg-light rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">To Do List</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div className="d-flex mb-2">
                                    <input className="form-control bg-transparent" type="text" placeholder="Enter task" />
                                    <button type="button" className="btn btn-primary ms-2">Add</button>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" checked />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span><del>Short task goes here...</del></span>
                                            <button className="btn btn-sm text-primary"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pt-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Testimonial</h6>
                                <div className="owl-carousel testimonial-carousel">
                                    <Slider {...settings}>
                                        <div className="testimonial-item text-center">
                                            <img className="img-fluid rounded-circle mx-auto mb-4" src="img/testimonial-1.jpg" />
                                            <h5 className="mb-1">Client Name</h5>
                                            <p>Profession</p>
                                            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        </div>
                                        <div className="testimonial-item text-center">
                                            <img className="img-fluid rounded-circle mx-auto mb-4" src="img/testimonial-2.jpg" />
                                            <h5 className="mb-1">Client Name</h5>
                                            <p>Profession</p>
                                            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <iframe className="position-relative rounded w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameborder="0" allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
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

                                Designed By <a href="/"> Dev</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}