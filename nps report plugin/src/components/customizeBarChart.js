import React from "react";
import "./templatestyle.scss";
import BarChart from "./BarChart";
function customizeBarchart() {
  return (
    <div className="framereport">
      <div className="framereport__scale">
        <div className="report__centerbar">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default customizeBarchart;
