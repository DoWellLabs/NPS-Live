import React from "react";
import PieChart from "./PieChart";
import "./templatestyle.scss";
function customizePieChart() {
  return (
    <div className="framereport">
      <div className="framereport__scale">
        <div className="report__centerpie">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default customizePieChart;
