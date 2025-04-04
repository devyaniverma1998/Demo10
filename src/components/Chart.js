import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../css/style.css";
import "../css/bootstrap.min.css";

export default function ChartComponent() {
    // Store chart instances
    const chartRefs = useRef({});

    useEffect(() => {
        const chartIds = [
            "line-chart",
            "salse-revenue",
            "bar-chart",
            "worldwide-sales",
            "pie-chart",
            "doughnut-chart",
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
        createChart("line-chart", "line", {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{ label: "Sales", data: [10, 20, 30, 40, 50], borderColor: "blue", fill: false }],
        });

        createChart("salse-revenue", "line", {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [
                { label: "Revenue", data: [50, 40, 30, 20, 10], borderColor: "red", fill: false },
                { label: "Profit", data: [15, 25, 35, 45, 55], borderColor: "green", fill: false },
            ],
        });

        createChart("bar-chart", "bar", {
            labels: ["A", "B", "C", "D"],
            datasets: [{ label: "Sales", data: [12, 19, 3, 5], backgroundColor: "purple" }],
        });

        createChart("worldwide-sales", "bar", {
            labels: ["A", "B", "C", "D"],
            datasets: [
                { label: "Product A", data: [10, 30, 50, 70], backgroundColor: "blue" },
                { label: "Product B", data: [20, 40, 60, 80], backgroundColor: "red" },
            ],
        });

        createChart("pie-chart", "pie", {
            labels: ["Red", "Blue", "Green"],
            datasets: [{ data: [300, 50, 100], backgroundColor: ["red", "blue", "green"] }],
        });

        createChart("doughnut-chart", "doughnut", {
            labels: ["A", "B", "C"],
            datasets: [{ data: [120, 150, 180], backgroundColor: ["orange", "pink", "cyan"] }],
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

    return (
        <div className="content">
            {/* Navbar */}
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="#" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search" />
                </form>
            </nav>

            {/* Charts */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Single Line Chart</h6>
                            <canvas id="line-chart"></canvas>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Multiple Line Chart</h6>
                            <canvas id="salse-revenue"></canvas>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Single Bar Chart</h6>
                            <canvas id="bar-chart"></canvas>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Multiple Bar Chart</h6>
                            <canvas id="worldwide-sales"></canvas>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Pie Chart</h6>
                            <canvas id="pie-chart"></canvas>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Doughnut Chart</h6>
                            <canvas id="doughnut-chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
