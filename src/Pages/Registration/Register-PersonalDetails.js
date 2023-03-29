import './App.css';
import React, { useState } from "react";
import {
  Fieldset,
  InputField,
  Button,
  FormGroup,
  BackLink,
  Main
} from "govuk-react";
import Header from './Components/DefaultHeader';
import Footer from './Components/Footer';


const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    postcode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form values, e.g. submit to server
  };

  return (
    <div>
      <Header />

      <Main>
        <BackLink onClick={function noRefCheck(){}}>
          Back
        </BackLink>

        <FormGroup onSubmit={handleSubmit}>
        <p>Register with your name, surname and postcode that you are registered with our central database</p>
        <p>If you prefer registering with the NHS number, select the link below.</p>

          <Fieldset>
            <b>Name</b>
              <InputField
                label="Enter name"
                name="patientName"
                value={formValues.name}
                // onChange={handleInputChange}
                required/>
            
            <b>Surname</b>
              <InputField
                label="Enter Surname"
                name="patientSurname"
                value={formValues.surname}
                // onChange={handleInputChange}
                required/>

            <b>Postcode</b>
              <InputField
                label="Enter Postcode"
                name="patientPostcode"
                value={formValues.postcode}
                // onChange={handleInputChange}
                required/>
        
              <Button>Enter</Button>
            
          </Fieldset>
        </FormGroup>
      
      </Main>
      
      <Footer />
    </div>
  );
};

export default RegistrationPage;