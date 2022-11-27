import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";
import NotFound from "./Layout/NotFound";
import Layout from "./Layout/Layout";
import Menu from "./Layout/Menu";
import Clients from "./Layout/Clients";
import Vendors from "./Layout/Vendors";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Menu />}>
          <Route path="/" element={<Layout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
