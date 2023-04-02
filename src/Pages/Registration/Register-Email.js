import React, { useState } from "react";
import {
  Fieldset,
  InputField,
  Button,
  FormGroup,
  BackLink,
  Main,
  H2
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
        <H2>What is your email address?</H2>
        <p color='grey'>Example format: adrianRos@gmail.com</p>

          <Fieldset>
            <b>Email Address</b>
              <InputField
                label="Enter email address"
                name="email"
                value={formValues.email}
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