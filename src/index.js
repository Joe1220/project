import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/App";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from 'redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);