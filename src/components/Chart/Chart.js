import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amountValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumVal = Math.max(...amountValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
