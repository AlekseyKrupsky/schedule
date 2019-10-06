/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import "../bootstrap";

import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "./ducks";
import { Main } from "./layouts/Main";
import "bulma/bulma.sass";
import "./schedule.scss";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("schedule")
);
