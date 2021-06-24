import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Class from "./pages/Class";
import Course from "./pages/Course";
import Institution from "./pages/Institution";
import InstitutionRegister from "./pages/InstitutionRegister";
import ListQuizz from "./pages/ListQuizz";
import LoadingPage from "./pages/LoadingPage";
import LoadingProfStart from "./pages/LoadingProfStart";
import Login from "./pages/Login";
import QuizzScreen from "./pages/QuizzScreen";
import Quizz from "./pages/Quizz";
import Register from "./pages/Register";
import { isSignedIn } from "./services/security";

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

        <PrivateRoute path="/quizz">
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
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
