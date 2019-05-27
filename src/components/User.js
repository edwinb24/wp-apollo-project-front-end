import React from "react"
import {Route, Link} from "react-router-dom"

const Users = ({match}) => <p>{match.params.id}</p>

function User(props) {
  let {id} = props.match.params
  console.log(props.match.params)
  return(
    <div className="container">
      <h1>Hello USER! {id}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio aliquid vitae atque, iure in aperiam impedit. Obcaecati consequatur dignissimos nesciunt iure quo, ipsa nam, nostrum sed tempore illo ad!</p>
      <ul>
        <li>
          <Link to="/user/1">User 1</Link>
        </li>
        <li>
          <Link to="/user/2">User 2</Link>
        </li>
        <li>
          <Link to="/user/3">User 3</Link>
        </li>
      </ul>
      <Route path="/user/:id" component={Users}></Route>
    </div>
  )
}

export default User
