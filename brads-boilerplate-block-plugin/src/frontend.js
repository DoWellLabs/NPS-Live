import "./frontend.scss";
import "./templatefront.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ScaleProvider } from "./components/ScaleContext";

import uuid from "react-uuid";

import Scalefrontend from "./Scalefrontend";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  // console.log(data);
  ReactDOM.render(
    <ScaleProvider>
      <OurComponent {...data} />
    </ScaleProvider>,
    div
  );
  div.classList.remove("boilerplate-update-me");
  div.classList.add("boilerplate-update-front");
});

function OurComponent({ state }) {
  return (
    <div>
      <Scalefrontend state_back_end={{ state: state }} />
    </div>
  );
}
