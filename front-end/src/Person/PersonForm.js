function PersonForm({
  personChangeHandler,
  addressChangeHandler,
  person,
  address,
}) {
  return (
    <>
      <form>
        <div>
          <div class="row g-3">
            <div class="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={personChangeHandler}
                value={person.person_first_name}
              />
            </div>
            <div className="col-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={personChangeHandler}
                value={person.person_last_name}
              />
            </div>
          </div>
          <h5>Emails</h5>
          <div className="row g-3">
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Home Email"
                onChange={personChangeHandler}
                value={person.person_home_email}
              />
            </div>
            <div className="col-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Work Email"
                onChange={personChangeHandler}
                value={person.person_work_email}
              />
            </div>
          </div>
          <div>
            <h5>Phone Numbers</h5>
            <div className="row g-3">
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                  onChange={personChangeHandler}
                  value={person.person_mobile_number}
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Home Number"
                  onChange={personChangeHandler}
                  value={person.person_home_number}
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Work Number"
                  onChange={personChangeHandler}
                  value={person.person_work_number}
                />
              </div>
            </div>
          </div>
          <div>
            <h5>Address</h5>
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street"
                  onChange={addressChangeHandler}
                  value={address.address_street}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  onChange={addressChangeHandler}
                  value={address.address_city}
                />
              </div>
              <div className="col-sm-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  onChange={addressChangeHandler}
                  value={address.address_state}
                />
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zip"
                  onChange={addressChangeHandler}
                  value={address.address_zipcode}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="primary-address_gate_code"
                  placeholder="Gate Code"
                  onChange={addressChangeHandler}
                  value={address.address_gate_code}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PersonForm;
