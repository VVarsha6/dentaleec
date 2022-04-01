import './App.css'
import Sidebar from "./components/Sidebar";
import FormWithYup from "./forms/FormWithYup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deptcamp } from "./pages/Deptcamp";
import { Analytics } from './pages/Analytics';
import { DeptOP } from './pages/DeptOP';
import { Kovur } from './pages/Kovur';
import { Satcamp } from './pages/Satcamp';
import { Tcc } from './pages/Tcc';
import { ViewData } from './pages/ViewData';

function App() {
  return (
    <Router>
      <Sidebar />
      {/* <FormWithYup /> */}
      <Routes>
        <Route path="/Deptcamp" element={<Deptcamp />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/DeptOP" element={<DeptOP />} />
        <Route path="/Kovur" element={<Kovur />} />
        <Route path="/Satcamp" element={<Satcamp />} />
        <Route path="/Tcc" element={<Tcc />} />
        <Route path="/ViewData" element={<ViewData />} />
        <Route path='/home' />
      </Routes>
    </Router>

  );
}

export default App;
