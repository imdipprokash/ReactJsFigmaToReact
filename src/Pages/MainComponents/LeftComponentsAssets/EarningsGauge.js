import Chart from "react-apexcharts";
import React, { useState } from "react";
const EarningsGauge = () => {
  const [option, setOptions] = useState({
    chart: {
      height: 300,
    },
    colors: ["#3A57E8", "#85F4FA"],
    stroke: {
      lineCap: "round",
      width: 1,
      curve: "smooth",
    },
    // plotOptions: {
    //   radialBar: {
    //     dataLabels: {
    //       total: {
    //         show: false,
    //         label: "TOTAL",
    //       },
    //     },
    //   },
    // },
    labels: ["Fashion", "Accessories"],
    legend: {
      show: true,
      fontSize: "18px",
      labels: {
        colors: "#8A92A6",
      },
      formatter: function (seriesName, opts) {
        return `${seriesName} <br/> ${
          opts.w.globals.series[opts.seriesIndex]
        }k  `;
      },
    },
  });

  const [series, setSeries] = useState([67, 44]);

  return (
    <div className="w-[370px] ">
      <Chart
        options={option}
        series={series}
        type="radialBar"
        height={"400px"}
      />
    </div>
  );
};

export default EarningsGauge;
