import React from "react"

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Post from "./containers/Post"

const AllPosts = () => (
    <Query
      query={gql`
        {
            posts {
                nodes {
                    title
                    id
                }
            }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
            let allPostsData = data.posts.nodes.map(post => <Post key={post.id} post={post}/>)
        return (
            <div className="post-list">
                {allPostsData}
            </div>
        )
      }}
    </Query>
  );

export default AllPosts