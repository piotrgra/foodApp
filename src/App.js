import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const data = localStorage.getItem("state");
    try {
      if (data) {
        dispatch({
          type: "GET_LOCAL_STORAGE",
          payload: JSON.parse(data),
        });
      }
    } catch (e) {
      console.log("Error with getting localstoarge save to state.");
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
