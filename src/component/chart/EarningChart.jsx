import React, { useEffect, useRef, useContext, useState } from "react";
import { Chart } from "chart.js/auto";
import GraphContext from "../../context/Graph/GraphContext";
import InsertData from "../crud/InsertDataModal";
import ChangeData from "../crud/ChangeDataModal";

Chart.defaults.font.family = "Nunito";
Chart.defaults.font.style = "#858796";

const EarningsOverviewChart = () => {
  const graph_data = useContext(GraphContext);
  const { remove, data, year, minus } = graph_data;
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const chartRef = useRef();
  const open_modal = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    const myChart = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: year,
        datasets: [
          {
            label: "Earning",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: data,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              time: {
                unit: "year",
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                maxTicksLimit: 7,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2],
              },
            },
          ],
        },
        plugins: {
          legend: {
            display: false,
          },
        },

        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          titleMarginBottom: 10,
          titleFontColor: "#6e707e",
          titleFontSize: 14,
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          intersect: false,
          mode: "index",
          caretPadding: 10,
          callbacks: {
            label: function (tooltipItem, chart) {
              var datasetLabel =
                chart.datasets[tooltipItem.datasetIndex].label || "";
              return datasetLabel + ":" + tooltipItem.yLabel;
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data, year]);

  return (
    <>
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Earnings Overview
          </h6>
          {data.length !== 0 && year.length ? (
            <div className="dropdown no-arrow">
              <span
                className="bg-success text-white pb-1 px-1 me-1 rounded cursor-pointer"
                onClick={open_modal}
              >
                +
              </span>
              <span
                className="bg-warning text-white pb-1 px-2 rounded cursor-pointer"
                onClick={minus}
              >
                -
              </span>
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-danger"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <a className="dropdown-item" href="#" onClick={remove}>
                  Remove_data
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setChange(!change)}
                >
                  Change_data
                </a>
              </div>
            </div>
          ) : (
            <button className="btn btn-success btn-sm" onClick={open_modal}>
              {" "}
              Add_Data
            </button>
          )}
        </div>
        {/* Card Body */}
        <div className="card-body">
          <div className="chart-area">
            <canvas id="myAreaChart" ref={chartRef}></canvas>
          </div>
        </div>
      </div>
      <InsertData open={open} setOpen={setOpen} />
      <ChangeData change={change} setChange={setChange} />
    </>
  );
};

export default EarningsOverviewChart;
