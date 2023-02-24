import Vendor from "./Vendor";
import NewVendor from "./NewVendor";

function VendorMenu() {
  return (
    <>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-vendorList-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-vendorList"
            type="button"
            role="tab"
            aria-controls="nav-vendorList"
            aria-selected="true"
          >
            Vendor List
          </button>
          <button
            class="nav-link"
            id="nav-newVendor-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-newVendor"
            type="button"
            role="tab"
            aria-controls="nav-newVendors"
            aria-selected="false"
          >
            Add New Vendor
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-vendorList"
          role="tabpanel"
          aria-labelledby="nav-vendorList-tab"
          tabindex="0"
        >
          <Vendor />
        </div>
        <div
          class="tab-pane fade"
          id="nav-newVendor"
          role="tabpanel"
          aria-labelledby="nav-newVendor-tab"
          tabindex="0"
        >
          <NewVendor />
        </div>
      </div>
    </>
  );
}

export default VendorMenu;
