
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../css/style.css";
import "../css/bootstrap.min.css";

export default function ChartComponent() {
    const chartRefs = useRef({});

    useEffect(() => {
        const chartIds = [
            "worldwide-sales",
            "salse-revenue",
        ];

        // Destroy existing charts to prevent duplicates
        chartIds.forEach((id) => {
            if (chartRefs.current[id]) {
                chartRefs.current[id].destroy();
            }
        });

        // Function to create a chart
        const createChart = (id, type, data) => {
            const ctx = document.getElementById(id);
            if (ctx) {
                chartRefs.current[id] = new Chart(ctx, { type, data });
            }
        };

        // Define chart data
        createChart("worldwide-sales", "bar", {
            labels: ["A", "B", "C", "D"],
            datasets: [
                { label: "Product A", data: [10, 30, 50, 70], backgroundColor: "blue" },
                { label: "Product B", data: [20, 40, 60, 80], backgroundColor: "red" },
            ],
        });

        createChart("salse-revenue", "line", {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [
                { label: "Revenue", data: [50, 40, 30, 20, 10], borderColor: "red", fill: false },
                { label: "Profit", data: [15, 25, 35, 45, 55], borderColor: "green", fill: false },
            ],
        });

        return () => {
            // Cleanup: Destroy charts when component unmounts
            chartIds.forEach((id) => {
                if (chartRefs.current[id]) {
                    chartRefs.current[id].destroy();
                }
            });
        };
    }, []);

    // Sample Sales Data
    const salesData = [
        { id: 1, date: "01 Jan 2045", invoice: "INV-0123", customer: "John Doe", amount: "$123", status: "Paid" },
        { id: 2, date: "02 Jan 2045", invoice: "INV-0124", customer: "Jane Doe", amount: "$150", status: "Pending" },
        { id: 3, date: "03 Jan 2045", invoice: "INV-0125", customer: "Michael Smith", amount: "$200", status: "Paid" },
        { id: 4, date: "04 Jan 2045", invoice: "INV-0126", customer: "Emily Johnson", amount: "$175", status: "Cancelled" },
        { id: 5, date: "05 Jan 2045", invoice: "INV-0127", customer: "David Brown", amount: "$300", status: "Paid" },
    ];

    return (

        <>
            <div className="content">
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

                {/* Charts Section */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Worldwide Sales</h6>
                                    <button className="btn btn-sm btn-link">Show All</button>
                                </div>
                                <canvas id="worldwide-sales"></canvas>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Sales & Revenue</h6>
                                    <button className="btn btn-sm btn-link">Show All</button>
                                </div>
                                <canvas id="salse-revenue"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Sales Table */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Sales</h6>
                            <button className="btn btn-sm btn-link">Show All</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">
                                        <th scope="col">
                                            <input className="form-check-input" type="checkbox" />
                                        </th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Invoice</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salesData.map((sale) => (
                                        <tr key={sale.id}>
                                            <td>
                                                <input className="form-check-input" type="checkbox" />
                                            </td>
                                            <td>{sale.date}</td>
                                            <td>{sale.invoice}</td>
                                            <td>{sale.customer}</td>
                                            <td>{sale.amount}</td>
                                            <td>
                                                <span className={`badge ${sale.status === "Paid" ? "bg-success" : sale.status === "Pending" ? "bg-warning" : "bg-danger"}`}>
                                                    {sale.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-primary">Detail</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

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