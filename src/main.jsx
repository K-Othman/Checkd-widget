import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MatchDetailsProvider from "./context/matchDetailsContext/MatchDetailsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatchDetailsProvider>
      <App />
    </MatchDetailsProvider>
  </React.StrictMode>
);
