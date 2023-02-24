import { Outlet } from "react-router-dom";
import ClientMenu from "../Client/ClientMenu";
import VendorMenu from "../Vendor/VendorMenu";
import "../App.js";

function Menu() {
  return (
    <>
      <h1 className="menu">Contact List</h1>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-dashboard-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-dashboard"
            type="button"
            role="tab"
            aria-controls="nav-dashboard"
            aria-selected="true"
          >
            Dashboard
          </button>
          <button
            class="nav-link"
            id="nav-client-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-client"
            type="button"
            role="tab"
            aria-controls="nav-client"
            aria-selected="false"
          >
            Client
          </button>
          <button
            class="nav-link"
            id="nav-vendor-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-vendor"
            type="button"
            role="tab"
            aria-controls="nav-vendor"
            aria-selected="false"
          >
            Vendor
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-dashboard"
          role="tabpanel"
          aria-labelledby="nav-dashboard-tab"
          tabindex="0"
        >
          <Outlet />
        </div>
        <div
          class="tab-pane fade"
          id="nav-client"
          role="tabpanel"
          aria-labelledby="nav-client-tab"
          tabindex="0"
        >
          <ClientMenu />
        </div>
        <div
          class="tab-pane fade"
          id="nav-vendor"
          role="tabpanel"
          aria-labelledby="nav-vendor-tab"
          tabindex="0"
        >
          <VendorMenu />
        </div>
      </div>
    </>
  );
}

export default Menu;
