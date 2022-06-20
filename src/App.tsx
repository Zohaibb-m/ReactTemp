import { useState } from 'react';
import './App.css';
import Sample_Com_1 from './Components/Sample_Com_1';
import Sample_Com_2 from './Components/Sample_Com_2';
import {Sample} from "./Context/Sample_Context"

function App() {

  const [reponame, setReponame]=useState("React-Template")
  return (
    <div className="App">
      <p className="text-3xl">
      This repo contains a react-typescript template.
      It has the following modules installed.
      </p>
      <ul className="list-disc">
        <li>React Router dom</li>
        <li>React Icons</li>
        <li>Tailwind CSS</li>
      </ul>
      <h3 className='text-3xl'>Below are 2 sample components using react context API</h3>
      <Sample.Provider value={{reponame}}>
      <Sample_Com_1 />
      <Sample_Com_2 />
      </Sample.Provider>
    
    </div>
  );
}

export default App;
