import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

Chart.defaults.font.family =
  'Nunito, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.color = "#858796";

const BarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const myBarChart = chartRef.current.getContext("2d");
    let myChart = new Chart(myBarChart, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
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
          x: {
            type: "category",
            time: {
              unit: "month",
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 6,
            },
            maxBarThickness: 25,
          },
          y: {
            ticks: {
              min: 0,
              max: 15000,
              maxTicksLimit: 5,
              padding: 10,
              callback: function (value, index, values) {
                return "$" + value.toLocaleString();
              },
            },
            grid: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2],
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, data) {
                var datasetLabel =
                  data.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + ": $" + tooltipItem.formattedValue;
              },
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} id="myBarChart"></canvas>;
};

export default BarChart;
