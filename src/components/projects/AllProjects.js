import React from "react"

import { Query } from "react-apollo";

import Project from "./containers/Project"
import {ALL_PROJECTS}  from "../../AllQueries"

const AllProjects = () => (
    <Query
      query={ALL_PROJECTS}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
            let allProjectsData = data.projects.nodes.map(project => <Project key={project.id} project={project}/>)
        return (
            <div className="project-list">
                {allProjectsData}
            </div>
        )
      }}
    </Query>
  );

export default AllProjects