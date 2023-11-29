import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const RevenueChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const myPieChart = chartRef.current.getContext("2d");
    let myChart = new Chart(myPieChart, {
      type: "doughnut",
      data: {
        labels: ["Direct", "Referral", "Social"],
        datasets: [
          {
            data: [55, 30, 15],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: "80%",
      },
    });

    // Cleanup function to destroy the chart when the component is unmounted
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="card shadow mb-4">
      {/* Card Header - Dropdown */}
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
        <div className="dropdown no-arrow">
          <a
            className="dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            aria-labelledby="dropdownMenuLink"
          >
            <div className="dropdown-header">Dropdown Header:</div>
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
      {/* Card Body */}
      <div className="card-body mx-auto">
        <div className="chart-pie pt-4 pb-2">
          <canvas id="myPieChart" ref={chartRef}></canvas>
        </div>
        <div className="mt-4 text-center small">
          <span className="me-2">
            <i className="fas fa-circle text-primary"></i> Direct
          </span>
          <span className="me-2">
            <i className="fas fa-circle text-success"></i> Social
          </span>
          <span className="me-2">
            <i className="fas fa-circle text-info"></i> Referral
          </span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
