import React from "react"
import {Route, Switch} from "react-router-dom"

import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Latest from "./components/Latest"
import User from "./components/User"
import NotFound from "./NotFound"

function Router() {
  return (
    <span>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/latest" component={Latest} />
        <Route path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </span>
  )
}

export default Router
