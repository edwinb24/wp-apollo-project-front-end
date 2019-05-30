import React, {Component}  from "react"

import Navbar from "./components/Navbar"
import AllPosts from "./components/AllPosts"

class App extends Component {
  render() {
    return( 
        <div>
          <h1>HelloWorld</h1>
          <Navbar />
          <AllPosts />
        </div>
    )
  }
}

export default App
