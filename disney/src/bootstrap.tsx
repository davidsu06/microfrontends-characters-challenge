import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { useSwitchLanguage } from "./hooks";

const mount = (el: Element) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("disney-app-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount, useSwitchLanguage };
