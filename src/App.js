import React from "react";
import Class from "../src/pages/Class";
import Routes from "./router";
import { GlobalStyles } from "./GlobalStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoadingPage from "./pages/LoadingPage";
import LoadingProfStart from "./pages/LoadingProfStart";
import QuizzScreen from "./pages/QuizzScreen";
import InstitutionRegister from "./pages/InstitutionRegister";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Result from "./pages/Result";
import ResultT from "./pages/ResultT";
import WaitingStud from "./pages/WaitingStud";

function App() {
  return (
    <div className="app">
      <>
        <GlobalStyles />
        <LoadingProfStart />
      </>
    </div>
  );
}

export default App;
