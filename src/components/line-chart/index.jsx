import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(224, 255, 255, .2)'
        }
      },
      x: {
        grid: {
          display: false ,
        }
      }
    }
  };
  

 const LineChart = ({ ApiData}) => {
    const labels = [...Object.keys(ApiData)]
    const values = [...Object.values(ApiData)]
    const data = {
        labels,
        datasets: [
          {
            label: "Awards",
            data: values,
            fill: true,
            backgroundColor: "rgba(224, 255, 255, .2)",
            borderColor: "rgba(75,192,192,1)"
          }
        ]
      };
      

  return <Chart type='line' options={options} data={data} />
  
 
  
}
export default  LineChart;