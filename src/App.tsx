import './App.css';
import { UserContextProvider } from './Context/UserContext';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './Pages';
import Sample_Com_1 from './Components/Sample_Com_1';
import Sample_Com_2 from './Components/Sample_Com_2';

function App() {
   
  return (
    <>
      <UserContextProvider>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Index/>}/>
              </Routes>
          </BrowserRouter>
      </UserContextProvider>
      
    
    </>
  );
}

export default App;
