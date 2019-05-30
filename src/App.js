import React, {Component}  from "react"

import Router from "./Router"

import Header from "./components/header/Header"
import Footer from "./components/Footer"
import AllPosts from "./components/AllPosts"

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
