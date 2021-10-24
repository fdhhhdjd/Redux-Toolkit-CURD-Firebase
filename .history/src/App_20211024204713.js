import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, View, AddEdit } from "./import/Index";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <ToastContainer position="top-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddEdit} />
            <Route path="/update/:id" component={AddEdit} />
            <Route path="/view/:id" component={View} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
