import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";
import NotFound from "./Layout/NotFound";
import Menu from "./Layout/Menu";
import Client from "./Client/Client";
import Vendor from "./Vendor/Vendor";
import NewClient from "./Client/NewClient";
import NewVendor from "./Vendor/NewVendor";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Menu />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/client" element={<Client />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/newvendor" element={<NewVendor />} />
          <Route path="/newclient" element={<NewClient />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
