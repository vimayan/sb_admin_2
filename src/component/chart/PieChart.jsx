import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const PieChart = () => {
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

  return <canvas id="myPieChart" ref={chartRef} className="mx-auto"></canvas>;
};

export default PieChart;
