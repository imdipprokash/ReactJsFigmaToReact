import Chart from "react-apexcharts";
import React, { useState } from "react";

const SplineArea = () => {
  const [option, setOption] = useState({
    chart: {
      height: 100,
      type: "area",
      // stacked: true,

      // toolbar: {
      //   show: false,
      // },
      //   selection: {
      //     enabled: true,
      //   },
    },

    title: {
      text: "$855.8k",
      style: {
        fontSize: "24px",
        fontWeight: "lighter",
      },
    },
    subtitle: {
      text: "Gross Sales",
      style: {
        fontSize: "14px",
        color: "#8A92A6",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 2,
      dashArray: 0,
    },
    legend: {
      show: true,
      position: "top",
    },
    xaxis: {
      tickPlacement: "on",
      type: "categorie",
      categories: ["Jan", "Feb", "Apr", "Mar", "Jun", "Jul", "Aug"],
    },
    tooltip: {},
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        // shadeIntensity: 0.05,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        // inverseColors: true,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Cost",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  return (
    <div className=" ">
      <Chart options={option} series={series} type="area" height={400} />
    </div>
  );
};

export default SplineArea;

{
  /* <div className=" relative  justify-between flex ">
{/* Title 
<div>
  <h1 className=" text-2xl">$855.8K</h1>
</div>
</div> */
}
