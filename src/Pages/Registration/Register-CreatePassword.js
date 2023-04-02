import React, { useState } from "react";
import {
  Fieldset,
  InputField,
  Button,
  FormGroup,
  BackLink,
  Main
} from "govuk-react";
import Header from '../../Components/DefaultHeader';
import Footer from '../../Components/Footer';


const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
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
        <p>Password requires: 8 characters or more</p>

          <Fieldset>
            <b>Password</b>
            <InputField
                label="Enter password"
                name="password"
                value={formValues.password}
                // onChange={handleInputChange}
                required/>

            <b>Confirm Password</b>
            <InputField
                label="Confirm password"
                name="password"
                value={formValues.password}
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