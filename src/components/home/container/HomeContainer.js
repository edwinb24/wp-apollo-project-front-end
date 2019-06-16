import React from "react"

function HomeContainer(props){
    return (
        <div className="home">
            <h1>{props.home.title}</h1>
            {props.home.content}
        </div>
    )
}
export default HomeContainer