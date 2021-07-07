import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Class from "./pages/Class";
import Course from "./pages/Course";
import Institution from "./pages/Institution";
import InstitutionRegister from "./pages/InstitutionRegister";
import Hall from "./pages/Hall";
import Login from "./pages/Login";
import QuizzScreen from "./pages/QuizzScreen";
import Quizz from "./pages/Quizz";
import Register from "./pages/Register";
import { isSignedIn } from "./services/security";
import WaitingStud from "./pages/WaitingStud";
import Result from "./pages/ResultT";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return (
      <>
        <Route {...rest}>{children}</Route>
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/quizzs">
          <Quizz />
        </PrivateRoute>

        <PrivateRoute path="/course">
          <Course />
        </PrivateRoute>

        <PrivateRoute path="/class">
          <Class />
        </PrivateRoute>
        <PrivateRoute path="/institution">
          <Institution />
        </PrivateRoute>
        <PrivateRoute path="/institution/register">
          <InstitutionRegister />
        </PrivateRoute>
        <PrivateRoute path="/hall">
          <Hall/>
        </PrivateRoute>
        <PrivateRoute path="/quizzes">
          <QuizzScreen/>
        </PrivateRoute>
        <PrivateRoute path="/wait">
          <WaitingStud/>
        </PrivateRoute>
        <PrivateRoute path="/result">
          <Result/>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
