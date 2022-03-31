import "./App.css";

import Sidebar from "./components/Sidebar";
import Forms from "./Forms/Forms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deptcamp,Screening, Turnover } from "./pages/Deptcamp";
function App() {
  return (
    <Router>
      <Forms/> 
      <Sidebar/>  
      <Routes>
        <Route path="/Deptcamp" exact component={Deptcamp} />
        <Route path="/Deptcamp/Screening" exact component={Screening} />
        <Route path="/Deptcamp/Turnover" exact component={Turnover} />
      </Routes>
    </Router>
    
  );
}
  
export default App;
