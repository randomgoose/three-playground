import React from "react";
import ReactDOM from "react-dom";
import { useFrame, Canvas } from "react-three-fiber";
import App from "./App";
import ModelViewer from "./components/ModelViewer";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ModelViewer />,
  rootElement
);
