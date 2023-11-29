import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js/auto';


Chart.defaults.font.family= 'Nunito';
Chart.defaults.font.style = '#858796';

const EarningsOverviewChart = () => {



    const chartRef = useRef();

    useEffect(() => {
      const myChartRef = chartRef.current.getContext('2d');
  
  const myChart = new Chart(myChartRef, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label:'Earning',
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
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
          }],
          
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
            xAxes: [{
              time: {
                unit: 'date',
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                maxTicksLimit: 7,
              },
            }],
            yAxes: [{
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
            }],
          },
          plugins:{
            legend: {
                display: false,
              },
          },
         
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + ':' + tooltipItem.yLabel;
              },
            },
          },
        },
      }
      );

      return () => {
        myChart.destroy();
      };


    }, []);







  return (
  
     <div className="card shadow mb-4">
     {/* Card Header - Dropdown */}
     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
       <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
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
     <div className="card-body">
       <div className="chart-area">
       <canvas id="myAreaChart" ref={chartRef}></canvas>
       </div>
     </div>
   </div>
  );
};

export default EarningsOverviewChart;
