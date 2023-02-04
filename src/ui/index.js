import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../../public/style.css"

(async () => await window.timeline.days())()

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);