import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <ToastContainer position="top-center" />
          <Switch>
            <Route exact path="/" />
            <Route path="add" />
            <Route path="/update/:id" />
            <Route path="/view/:id" />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
