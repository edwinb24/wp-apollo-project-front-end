import React from "react"

function Post(props){
    return (
        <div className="project-element">
            <h1>{props.post.title}</h1>
        </div>
    )
}
export default Post
