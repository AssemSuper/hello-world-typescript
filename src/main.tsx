import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
// const p1: React.ReactElement = React.createElement("p", null, "This is a p");
// const root: ReactDOM.Root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// const li1: React.ReactElement = React.createElement("li", null, "This is a l1");
// const li2: React.ReactElement = React.createElement("li", null, "This is a l2");
// const myul: React.ReactElement = React.createElement("ul", null, [li1, li2]);
// root.render(myul);
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

export default App;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
