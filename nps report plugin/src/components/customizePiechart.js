import React from "react";
import PieChart from "./PieChart";
import "./templatestyle.scss";
function customizePiechart() {
  return (
    <div className="frame">
      <div className="frame__scale">
        <div className="centerpie">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default customizePiechart;
