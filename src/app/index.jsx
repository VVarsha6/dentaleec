import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./containers/Analytics";
import Dashboard from "./containers/Dashboard";
import DepartmentCamp from "./containers/DepartmentCamp";
import DepartmentOutpatient from "./containers/DepartmentOutpatient";
import KovurCenter from "./containers/KovurCenter";
import Organisation from "./containers/Organisation";
import OrganisationEntry from "./containers/OrganisationEntry";
import SatelliteCenter from "./containers/SatelliteCenter";
import Tcc from "./containers/Tcc";
import ViewData from "./containers/ViewData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/organisationentry" element={<OrganisationEntry />} />
        <Route path="/organisation" element={<Organisation />} />
        <Route path="/departmentcamp" element={<DepartmentCamp />} />
        <Route path="/satellitecenter" element={<SatelliteCenter />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route
          path="/departmentoutpatient"
          element={<DepartmentOutpatient />}
        />
        <Route path="/kovur" element={<KovurCenter />} />
        <Route path="/tcc" element={<Tcc />} />
        <Route path="/viewdata" element={<ViewData />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
