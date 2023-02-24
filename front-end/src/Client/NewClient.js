import { useState } from "react";
import PersonForm from "../Person/PersonForm";
import { createClient } from "../Utils";

const defaultClient = {
  person_first_name: "",
  person_last_name: "",
  person_home_email: "",
  person_work_email: "",
  person_mobile_number: "",
  person_home_number: "",
  person_work_number: "",
};

const defaultAddress = {
  address_street: "",
  address_city: "",
  address_state: "MN",
  address_zipcode: "",
  address_gate_code: "",
};

function NewClient() {
  // Primary useStates
  const [newPrimaryPerson, setNewPrimaryPerson] = useState(defaultClient);
  const [newPrimaryAddress, setNewPrimaryAddress] = useState(defaultAddress);

  // Secondary useStates
  const [newSecondaryPerson, setNewSecondaryPerson] = useState(defaultClient);
  const [newSecondaryAddress, setNewSecondaryAddress] =
    useState(defaultAddress);

  // Caretaker UseStates
  const [newCaretakerPerson, setNewCaretakerPerson] = useState(defaultClient);
  const [newCaretakerAddress, setNewCaretakerAddress] =
    useState(defaultAddress);

  // Combined useState
  const [newClient, setNewClient] = useState({
    primaryPerson: { defaultClient },
    primaryAddress: { defaultAddress },
    secondaryPerson: { defaultClient },
    secondaryAddress: { defaultAddress },
    caretakerPerson: { defaultClient },
    caretakerAddress: { defaultAddress },
  });

  // Primary change handler
  const primaryPersonChangeHandler = (event) => {
    setNewPrimaryPerson({
      ...newPrimaryPerson,
      [event.target.name]: event.target.value,
    });
  };
  const primaryAddressChangeHandler = (event) => {
    console.log(event.target.value);
    setNewPrimaryAddress({
      ...newPrimaryAddress,
      [event.target.name]: event.target.value,
    });
  };

  // Secondary change handler
  const secondaryPersonChangeHandler = (event) => {
    setNewSecondaryPerson({
      ...newSecondaryPerson,
      [event.target.name]: event.target.value,
    });
  };
  const secondaryAddressChangeHandler = (event) => {
    setNewSecondaryAddress({
      ...newSecondaryAddress,
      [event.target.name]: event.target.value,
    });
  };

  // Caretaker change handler
  const caretakerPersonChangeHandler = (event) => {
    setNewCaretakerPerson({
      ...newCaretakerPerson,
      [event.target.name]: event.target.value,
    });
  };
  const caretakerAddressChangeHandler = (event) => {
    setNewCaretakerAddress({
      ...newCaretakerAddress,
      [event.target.name]: event.target.value,
    });
  };

  // Function to add new client to database
  async function addNewClient() {
    const abortController = new AbortController();
    return await createClient(newClient, abortController.signal);
  }

  // SubmitHandler to perform complete submission
  const submitHandler = (event) => {
    event.preventDefault();
    setNewClient({
      primaryPerson: { newPrimaryPerson },
      primaryAddress: { newPrimaryAddress },
      secondaryPerson: { newSecondaryPerson },
      secondaryAddress: { newSecondaryAddress },
      caretakerPerson: { newCaretakerPerson },
      caretakerAddress: { newCaretakerAddress },
    });
    addNewClient();
    setNewClient({ defaultClient }, { defaultAddress });
  };

  // Send each component to the form with appropriate change handlers
  return (
    <>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <h1> Add New Client </h1>
      <form onSubmit={submitHandler}>
        <div>
          <h3>Primary</h3>
          <PersonForm
            personChangeHandler={primaryPersonChangeHandler}
            addressChangeHandler={primaryAddressChangeHandler}
            person={newPrimaryPerson}
            address={newPrimaryAddress}
          />
        </div>
        <div>
          <h3>Secondary</h3>
          <PersonForm
            changeHandler={secondaryPersonChangeHandler}
            addressChangeHandler={secondaryAddressChangeHandler}
            person={newSecondaryPerson}
            address={newSecondaryAddress}
          />
        </div>
        <div>
          <h3>Caretaker</h3>
          <PersonForm
            changeHandler={caretakerPersonChangeHandler}
            addressChangeHandler={caretakerAddressChangeHandler}
            person={newCaretakerPerson}
            address={newCaretakerAddress}
          />
        </div>
      </form>
    </>
  );
}

export default NewClient;
