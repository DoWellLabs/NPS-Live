import { React, useContext, useState, useEffect, useRef } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";

import "../src/components/templatestyle.scss";

import Chart from "chart.js/auto";

export default function PieChartFrontEnd({ state_back_end }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [scaleId, setScaleId] = useState(null);
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const scoresRef = useRef(null);

  const { state } = state_back_end;
  let { unlikelyRate, veryLikelyRate, neutralRate, bar, showLabel } = state;

  // fetching scale id from the database to fetch the score to generate report
  const fetchScaleId = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get(
        `https://100035.pythonanywhere.com/api/plugins/?scale_type=nps&api_key=1b834e07-c68b-4bf6-96dd-ab7cdc62f07f&type=settings`
      );
      setScaleId(resp.data.scale_id);
      console.log(resp.data.scale_id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // fetching scores  from the data base to generate report

  const fetchScore = async () => {
    try {
      setIsLoading(true);
      const responseScore = await axios.get(
        `https://100035.pythonanywhere.com/api/plugins/?api_key=1b834e07-c68b-4bf6-96dd-ab7cdc62f07f&scale_type=nps&type=response&scale_id=${scaleId}`
      );
      // setScaleId(resp.data.scale_id);
      console.log(responseScore.data.scores);
      setScore(responseScore.data.scores);
      scoresRef.current = responseScore.data.scores;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // using useEffect to call the fetchscaleid function as the component is mounted
  useEffect(() => {
    fetchScaleId();
  }, []);

  //  using useEffect to call the fetchscore function as the component is mounted
  useEffect(() => {
    if (scaleId !== null) {
      fetchScore();
    }
  }, [scaleId]);

  //calculating the score and dividing it into unlikely , neutral and likely
  const values = score?.map((obj) => Object.values(obj)[0]);
  let unlikely = 0;
  let neutral = 0;
  let likely = 0;
  // console.log(values); // [4, 7, 9]

  //looping through the values and handling it
  if (values) {
    for (const value of values) {
      // console.log(value)
      if (value <= 6) {
        unlikely++;
      } else if (value <= 8) {
        neutral++;
      } else if (value <= 10) {
        likely++;
      }
    }
  }
  console.log("unlikely:", unlikely);
  console.log("neutral:", neutral);
  console.log("likely:", likely);

  // data for barchart and piechart from chartjs
  const data = {
    labels: ["unLikely", "neutral", "likely"],
    datasets: [
      {
        label: "# of Votes",
        data: [unlikely, neutral, likely],
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

  //making it draggable on the screen
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
    // jsx markup for the report plugin
    <div
      onMouseDown={dragMouseDown}
      className="framefrontend"
      style={{
        width: 250,
        textAlign: "center",
        top: position.top,
        left: position.left,
        cursor: "move",
      }}
    >
      <div className="frame__scalefrontend">
        {isLoading ? (
          <div className="loader"></div>
        ) : bar ? (
          <Bar data={data} width={30} height={30} />
        ) : (
          <Pie data={data} width={30} height={30} />
        )}
      </div>
    </div>
  );
}
