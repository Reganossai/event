import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from './components/Landingpage';
import Second from "./components/Second";
import First from "./components/First";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Landingpage />} />
     <Route exact path="/first" element={<First/>} />
     <Route exact path="/second" element={<Second />} />
     <Route exact path="/third" element={<Third/>} />
     <Route exact path="/fourth" element={<Fourth/>} />
     <Route exact path="/fifth" element={<Fifth/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
