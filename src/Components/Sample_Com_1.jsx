import React, { useContext, useState } from 'react'
import {Sample} from "../Context/Sample_Context"
import { ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

function Sample_Com_1() {
 let [Blogs,setBlogs]=useState([]);
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});
client
  .query({
    query: gql`
      query{
        blogs{
        data{
          id
          attributes{
            Date
            Title
            Body
          }
        }
    }
  }`
  })
  .then(result => setBlogs(result));
 
  const {reponame}=useContext(Sample)
  return (
    <div>
      <h2 className='text-2xl'>Sample_Component_1</h2>
      <h3>This component fetches record from a graphql database</h3>
      <p>{console.log(Blogs)}</p>
    </div>
  )
}

export default Sample_Com_1