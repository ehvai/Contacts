import { Link, Outlet } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav>
        <div>
          <Link to={"/dashboard"}>Dashboard</Link>
          <br />
          <Link to={"/clients"}>Clients</Link>
          <br />
          <Link to={"/vendors"}>Vendors</Link>
        </div>
        <div>Search</div>
      </nav>
      <Outlet />
    </>
  );
}

export default Menu;
