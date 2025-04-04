import React from "react";
import '../css/style.css';
import '../css/bootstrap.min.css';

export default function Typography() {
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
                    <input className="form-control border-0" type="search" placeholder="Search"/>
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
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
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
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
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
                            <h6 className="mb-4">Background Colors</h6>
                            <div className="p-2 mb-2 bg-primary text-white">.bg-primary</div>
                            <div className="p-2 mb-2 bg-secondary text-white">.bg-secondary</div>
                            <div className="p-2 mb-2 bg-success text-white">.bg-success</div>
                            <div className="p-2 mb-2 bg-danger text-white">.bg-danger</div>
                            <div className="p-2 mb-2 bg-warning text-dark">.bg-warning</div>
                            <div className="p-2 mb-2 bg-info text-dark">.bg-info</div>
                            <div className="p-2 mb-2 bg-light text-dark">.bg-light</div>
                            <div className="p-2 mb-2 bg-dark text-white">.bg-dark</div>
                            <div className="p-2 mb-2 bg-body text-dark">.bg-body</div>
                            <div className="p-2 mb-2 bg-white text-dark">.bg-white</div>
                            <div className="p-2 mb-0 bg-transparent text-dark">.bg-transparent</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Text Colors</h6>
                            <p className="text-primary">.text-primary</p>
                            <p className="text-secondary">.text-secondary</p>
                            <p className="text-success">.text-success</p>
                            <p className="text-danger">.text-danger</p>
                            <p className="text-warning bg-dark">.text-warning</p>
                            <p className="text-info bg-dark">.text-info</p>
                            <p className="text-light bg-dark">.text-light</p>
                            <p className="text-dark">.text-dark</p>
                            <p className="text-body">.text-body</p>
                            <p className="text-muted">.text-muted</p>
                            <p className="text-white bg-dark">.text-white</p>
                            <p className="text-black-50">.text-black-50</p>
                            <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Headings</h6>
                            <h1>h1 Heading</h1>
                            <h2>h2 Heading</h2>
                            <h3>h3 Heading</h3>
                            <h4>h4 Heading</h4>
                            <h5>h5 Heading</h5>
                            <h6>h6 Heading</h6>
                            <p className="h1">.h1 Heading</p>
                            <p className="h2">.h2 Heading</p>
                            <p className="h3">.h3 Heading</p>
                            <p className="h4">.h4 Heading</p>
                            <p className="h5">.h5 Heading</p>
                            <p className="h6">.h6 Heading</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Display Headings</h6>
                            <h1 className="display-1">Display 1</h1>
                            <h1 className="display-2">Display 2</h1>
                            <h1 className="display-3">Display 3</h1>
                            <h1 className="display-4">Display 4</h1>
                            <h1 className="display-5">Display 5</h1>
                            <h1 className="display-6 mb-0">Display 6</h1>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Text Elements</h6>
                            <p>This is a standard paragraph</p>
                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                            <p><del>This line of text is meant to be treated as deleted text.</del></p>
                            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                            <p><u>This line of text will render as underlined.</u></p>
                            <p><small>This line of text is meant to be treated as fine print.</small></p>
                            <p><strong>This line rendered as bold text.</strong></p>
                            <p className="mb-0"><em>This line rendered as italicized text.</em></p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Blockquotes</h6>
                            <div className="border rounded p-4 pb-0 mb-4">
                                <figure>
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="border rounded p-4 pb-0 mb-4">
                                <figure className="text-center">
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="border rounded p-4 pb-0 mb-0">
                                <figure className="text-end">
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Unstyled List</h6>
                            <ul className="list-unstyled mb-0">
                                <li>This is a list.</li>
                                <li>It appears completely unstyled.</li>
                                <li>Structurally, it's still a list.</li>
                                <li>However, this style only applies to immediate child elements.</li>
                                <li>Nested lists:
                                    <ul>
                                        <li>are unaffected by this style</li>
                                        <li>will still show a bullet</li>
                                        <li>and have appropriate left margin</li>
                                    </ul>
                                </li>
                                <li>This may still come in handy in some situations.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Description List</h6>
                            <dl className="row mb-0">
                                <dt className="col-sm-4">Description lists</dt>
                                <dd className="col-sm-8">A description list is perfect for defining terms.</dd>

                                <dt className="col-sm-4">Term</dt>
                                <dd className="col-sm-8">Definition for the term.</dd>

                                <dt className="col-sm-4">Another term</dt>
                                <dd className="col-sm-8">This definition is short, so no extra paragraphs or anything.</dd>

                                <dt className="col-sm-4 text-truncate">Truncated term is truncated</dt>
                                <dd className="col-sm-8">This can be useful when space is tight. Adds an ellipsis at the
                                    end.</dd>

                                <dt className="col-sm-4">Nesting</dt>
                                <dd className="col-sm-8">
                                    <dl className="row">
                                        <dt className="col-sm-4">Nested list</dt>
                                        <dd className="col-sm-8">Nested definition list.</dd>
                                    </dl>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Basic List Group</h6>
                            <ul className="list-group">
                                <li className="list-group-item bg-transparent">An item</li>
                                <li className="list-group-item bg-transparent">A second item</li>
                                <li className="list-group-item bg-transparent">A third item</li>
                                <li className="list-group-item bg-transparent">A fourth item</li>
                                <li className="list-group-item bg-transparent">And a fifth one</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Flush List Group</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent">An item</li>
                                <li className="list-group-item bg-transparent">A second item</li>
                                <li className="list-group-item bg-transparent">A third item</li>
                                <li className="list-group-item bg-transparent">A fourth item</li>
                                <li className="list-group-item bg-transparent">And a fifth one</li>
                            </ul>
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
                          
                            Designed By <a href="/"> Dev </a>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        </>
    );
}
