import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from './serviceWorker'

import {BrowserRouter} from "react-router-dom"
import App from "./App"
import Router from "./Router"

import ApolloClient, {gql} from "apollo-boost"
import { ApolloProvider} from "react-apollo";

const client = new ApolloClient({
  uri: "http://local.broceedwin-server.com/graphql?"
});

 client
   .query({
     query: gql`
       query {
         posts {
           nodes {
             title
         }
        }
      }
   `
  })
  .then(result => console.log(result));

const routered = (
                                  <div>
                                  <ApolloProvider client={client}>
                                    <BrowserRouter>
                                        <Router />
                                        <App />
                                    </ BrowserRouter>
                                  </ApolloProvider>
                                  </div>
                                )

ReactDOM.render(routered, document.getElementById("root"))
