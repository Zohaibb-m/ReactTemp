import React, { useContext } from 'react'
import {Sample} from "../Context/Sample_Context"
import { ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

function Sample_Com_2() {
  const {reponame}=useContext(Sample)
  const query_to=gql`
  query{
    countries{
      name
    }
}`
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});
const {data,isLoading,error}=useQuery('data',client.query({
  query:query_to}))
console.log(data)
  return (
    <div>
      <h2 className='text-2xl'>Sample_Component_2</h2>
      <h3>Repo Name: {reponame}</h3>
    </div>
  )
}

export default Sample_Com_2