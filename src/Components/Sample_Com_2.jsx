import React, { useContext } from 'react'
import {Sample} from "../Context/Sample_Context"

function Sample_Com_2() {
  const {reponame}=useContext(Sample)
  return (
    <div>
      <h2 className='text-2xl'>Sample_Component_2</h2>
      <h3>Repo Name: {reponame}</h3>
    </div>
  )
}

export default Sample_Com_2