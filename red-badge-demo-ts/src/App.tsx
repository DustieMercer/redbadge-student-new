import React from "react";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import SiteBar from "./components/Navbar";
import Store from "./components/Store";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <SiteBar />
      <Switch>
      <Route exact path='/alt'>
      <MainPage title="Props Passed In" />
        </Route>
      <Route exact path='/contact' component={Contact} />
      
      <Route exact path='/store' component={Store} />
      </Switch>
    </div>
  );
}

export default App;
