import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Details from './Components/Details';



function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/details" element={<Details/>} />
     </Routes>
  </Router>
  );
}

export default App;
