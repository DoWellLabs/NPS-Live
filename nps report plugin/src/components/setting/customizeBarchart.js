import React from "react";
import "../templatestyle.scss";
import BarChart from "../BarChart";
function customizeBarchart() {
  return (
    <div className="frame">
      <div className="frame__scale">
        <BarChart />
      </div>
    </div>
  );
}

export default customizeBarchart;
