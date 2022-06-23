import './App.css';
import { UserContextProvider } from './Context/UserContext';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './Pages';

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
