import { gql } from "apollo-boost";

export  const ALL_PROJECTS = gql`
{
    projects {
        nodes {
            title
            id
        }
    }
}`