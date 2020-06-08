import React from "react";
import Chart from "react-google-charts";

/**
 * Interface for smart chart props.
 */
interface ISmartChartProps {
  data?: any;
}

/**
 * Smart Chart component.
 * @param props
 */
export default function SmartChart(props: ISmartChartProps) {
  const { data } = props;

  const mapData = [["x", "Votes"], ...data.map((d: any) => Object.values(d))];

  return (
    <Chart
      width={"100%"}
      height={"400px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={mapData}
      options={{
        hAxis: {
          title: "ID",
        },
        vAxis: {
          title: "Votes",
        },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
