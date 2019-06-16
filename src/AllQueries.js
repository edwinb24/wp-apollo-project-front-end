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

export function RENDER_PAGE (myValue) {
    return gql`
    {
        pageBy(uri: \"${myValue}\") {
            title
            content(format:RENDERED)
            id
        }
    }`
}

export  const BIO_ELEMENT = gql`
{
    user(id: "dXNlcjox") {
        nicename
        description
        avatar {
            default
        }
        mediaItems {
            nodes {
                description(format:RENDERED)
            }
        }
    }
}`
