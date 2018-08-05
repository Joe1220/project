import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "components/Nav/Nav";
import Cart from "components/Cart/Cart";
import Main from "components/Main/Main";

const App = props => [
  <Nav key={1} />,
  <Routes key={2} />
];

const Routes = props => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
);


export default App;
