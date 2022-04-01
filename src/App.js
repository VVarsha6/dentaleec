import './App.css'
import Sidebar from "./components/Sidebar";
import FormWithYup from "./forms/FormWithYup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Deptcamp} from "./pages/Deptcamp";
import {Analytics } from './pages/Analytics';
import {hello} from './pages/home';
import {DeptOP} from './pages/DeptOP';
import {Kovur} from './pages/Kovur';
import {Satcamp} from './pages/Satcamp';
import  {Tcc}  from './pages/Tcc';
import {ViewData} from './pages/ViewData';

function App() {
  return (
    <Router>
      <Sidebar />
      {/* <FormWithYup /> */}
      <Routes>
        <Route path='/home' />
        <Route path="/Deptcamp" exact component={Deptcamp} />
        <Route path="/Analytics" exact component={Analytics} />
        <Route path="/DeptOP" exact component={DeptOP} />
        <Route path="/Kovur" exact component={Kovur} />
        <Route path="/Satcamp" exact component={Satcamp} />
        <Route path="/Tcc" exact component={Tcc} />
        <Route path="/ViewData" exact component={ViewData} /> 
      </Routes>
    </Router>

  );
}

export default App;
