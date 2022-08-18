import React, { useState } from "react";
import Chart from "react-apexcharts";
const ColumnCharts = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
      curve: "smooth",


    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S", "M", "T"],
    },
    // yaxis: {
    //   title: {
    //     text: "$ (thousands)",
    //   },
    // },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
  });
  const [series, setSeries] = useState([
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 93, 60, 26],
    },
    {
      name: "Revenue",
      data: [76, 85, 20, 38, 87, 35, 41, 14, 94],
    },
  ]);
  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="650px"
        height="230px"
      />
    </>
  );
};

export default ColumnCharts;
