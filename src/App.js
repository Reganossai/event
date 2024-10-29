import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from './components/Landingpage';
import Second from "./components/Second";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Landingpage />} />
     <Route exact path="/second" element={<Second />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
