import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from './serviceWorker'

import {BrowserRouter} from "react-router-dom"
import App from "./App"
import Router from "./Router"


const routered = (
                                  <div>
                                  <BrowserRouter>
                                      <Router />
                                      <App />
                                  </ BrowserRouter>
                                  </div>
                                )

ReactDOM.render(routered, document.getElementById("root"))
