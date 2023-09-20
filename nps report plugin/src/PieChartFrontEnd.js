import { React, useContext, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../src/components/templatestyle.scss";

export default function PieChartFrontEnd({ state_back_end }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { state } = state_back_end;
  let { unlikelyRate, veryLikelyRate, neutralRate, bar, showLabel } = state;
  {
    console.log("state for backend", state);
  }
  const data = {
    labels: ["unLikely", "likely", "very likely"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22],
        backgroundColor: [unlikelyRate, neutralRate, veryLikelyRate],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dragMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    let startX = e.clientX;
    let startY = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;
      startX = e.clientX;
      startY = e.clientY;

      setPosition((prevPosition) => ({
        top: prevPosition.top - deltaY,
        left: prevPosition.left - deltaX,
      }));
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  };
  return (
    <div
      // onMouseDown={dragMouseDown}
      style={{
        width: 450,
        textAlign: "center",
      }}
    >
      <div
        onMouseDown={dragMouseDown}
        className="framefrontend"
        style={{ top: position.top, left: position.left, cursor: "move" }}
      >
        <div className="frame__scalefrontend">
          {bar ? (
            <Pie data={data} width={30} height={30} />
          ) : (
            <Bar data={data} width={30} height={30} />
          )}
        </div>
      </div>
    </div>
  );
}
