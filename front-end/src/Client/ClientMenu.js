import Client from "./Client";
import NewClient from "./NewClient";

function ClientMenu() {
  return (
    <>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-clientList-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-clientList"
            type="button"
            role="tab"
            aria-controls="nav-clientList"
            aria-selected="true"
          >
            Client List
          </button>
          <button
            class="nav-link"
            id="nav-newClient-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-newClient"
            type="button"
            role="tab"
            aria-controls="nav-newClient"
            aria-selected="false"
          >
            Add New Client
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-clientList"
          role="tabpanel"
          aria-labelledby="nav-clientList-tab"
          tabindex="0"
        >
          <Client />
        </div>
        <div
          class="tab-pane fade"
          id="nav-newClient"
          role="tabpanel"
          aria-labelledby="nav-newClient-tab"
          tabindex="0"
        >
          <NewClient />
        </div>
      </div>
    </>
  );
}

export default ClientMenu;
