import './App.css'
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DeptCamp, ViewData, Analytics, DeptOP, Tcc, SatCamp, Kovur } from "./pages/index";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/Deptcamp" element={<DeptCamp />} />
        <Route path="/Satcamp" element={<SatCamp />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/DeptOP" element={<DeptOP />} />
        <Route path="/Kovur" element={<Kovur />} />
        <Route path="/Tcc" element={<Tcc />} />
        <Route path="/ViewData" element={<ViewData />} />
        <Route exact path='/' />
      </Routes>
    </Router>

  );
}

export default App;
