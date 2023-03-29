import './App.css';
import Nav from './Nav';
import Section from './Section';
import Listpro from './Listpro';
import Add from './Add';
import SProvider from './context/searchcontext'
import { BrowserRouter, Routes, Route ,Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SProvider>
      <BrowserRouter>
      <Nav/>
         <Routes>
          <Route path='/' element={<Listpro />} />
          <Route path='/add' element={<Add />} />
         </Routes>
      </BrowserRouter>
      </SProvider>
    </div>
  );
}

export default App;
