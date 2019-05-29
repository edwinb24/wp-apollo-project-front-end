import React from "react"

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const AllPosts = () => (
    <Query
      query={gql`
        {
            posts {
                nodes {
                    title
                }
            }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.posts.nodes[0].title
      }}
    </Query>
  );

export default AllPosts