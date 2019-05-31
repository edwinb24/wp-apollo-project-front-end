import React from "react"

function Project(props){
    return (
        <div className="project-element">
            <h1>{props.project.title}</h1>
        </div>
    )
}
export default Project
