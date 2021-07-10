/*
 * Created Date: Sat, 10th Jul 2021, 00:05:27 am
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 */

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import App from "./App";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider >,
    document.querySelector("#root")
);