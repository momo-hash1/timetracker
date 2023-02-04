import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../../public/style.css";

(async () => {
  const res = await window.timeline.days(3, 2022);
  console.log(res);
})();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
