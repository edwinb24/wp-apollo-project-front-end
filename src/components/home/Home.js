import React from "react"

import { Query } from "react-apollo";

import {RENDER_PAGE}  from "../../AllQueries"

import HomeContainer from "./container/HomeContainer"
 
const Home = () => {
  let homepageQuery = RENDER_PAGE("home-page")
  console.log("homepageQuery")

  return (
<Query query={homepageQuery}>
  {({ loading, error, data }) => {
    if (loading)
      return <p>Loading...</p>;
    if (error)
      return <p>Error :(</p>;
    let home = data.pageBy
    return (
      <div className="project-list">
        <HomeContainer key={home.id} home={home}/>
      </div>
    );
  } }
</Query>)
}

// function Home() {
//   return(
//     <div className="container">
//       <h1>Hello HOME!</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio aliquid vitae atque, iure in aperiam impedit. Obcaecati consequatur dignissimos nesciunt iure quo, ipsa nam, nostrum sed tempore illo ad!</p>
//     </div>
//   )
// }

export default Home
