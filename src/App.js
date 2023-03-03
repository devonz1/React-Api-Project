
import shapef from "C:/Users/devon/Promineo/react-api-project/src/components/shapef.png";
import './App.css';
import Create from './components/create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from "./components/read";
import Update from "./components/update";






function App() {
  return (
    <>
      <div className="main">
        <div>
          <img src={shapef} alt="logo" />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/read" element={<Read />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
