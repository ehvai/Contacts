import { Outlet } from "react-router-dom";
import "../App.js"

function Menu() {
  return (
    <>
    <h1 className="menu">Contacts</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href={"/dashboard"}>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/clients"}>Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/vendors"}>Vendors</a>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Menu;
