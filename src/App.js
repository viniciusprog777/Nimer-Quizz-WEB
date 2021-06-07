import React from "react";
import Class from "../src/pages/Class";
// import Routes from "./router";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <div className="app">
      <>
        <GlobalStyles />
        <Class/>
      </>
    </div>
  );
}

export default App;
