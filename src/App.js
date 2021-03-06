import React from "react";
import globalHook from "use-global-hook";
import Class from "../src/pages/Class";
import Routes from "./router";
import { GlobalStyles } from "./GlobalStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoadingPage from "./pages/LoadingPage";
import Hall from "./pages/Hall";
import QuizzScreen from "./pages/QuizzScreen";
import InstitutionRegister from "./pages/InstitutionRegister";
import Quizz from "./pages/Quizz";
import Course from "./pages/Course";
import Result from "./pages/Result";
import ResultT from "./pages/ResultT";
import WaitingStud from "./pages/WaitingStud";

const initialState = {
  socket: null,
  courseId: null,
  classId: null
};

const actions = {
  addToSocket: (store, amount) => {
    const newSocketConex = amount;
    store.setState({ socket: newSocketConex });
  },
  addToCourse: (store, amount) => {
    const newCourse = amount;
    store.setState({ courseId: newCourse });
  },
  addToClass: (store, amount) => {
    const newClass = amount;
    store.setState({ classId: newClass });
  },
  addToQuizz: (store, amount) => {
    const newQuizz = amount;
    store.setState({ classId: newQuizz });
  },

};

const useGlobal = globalHook(React, initialState, actions);

function App() {
  return (
    <div className="app">
      <>
        <GlobalStyles />
        <Routes />
      </>
    </div>
  );
}

export { App, useGlobal };
