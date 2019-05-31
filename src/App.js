import React, {Component}  from "react"

import Router from "./Router"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import AllProjects from "./components/projects/AllProjects"

class App extends Component {
  render() {
    return( 
        <div>
          <Header />
          <Router />
          <Footer />
        </div>
    )
  }
}

export default App
