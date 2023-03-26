import './App.css';
import React, { useState } from "react";
import {
  Fieldset,
  InputField,
  Button,
  Footer,
  FormGroup,
  BackLink,
  Main
} from "govuk-react";
import Header from './Components/DefaultHeader';
import Footer from './Components/Footer';

const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({
    nhsNumber: "",
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // e};

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
        <p>Your NHS number is a 11 digit number, like 94627888551.</p>
        <p>If you don’t know your NHS number you can select the link below to alternatively register using personal information</p>

          <Fieldset>
            <b>Enter NHS number</b>
          
              <InputField
                label="Enter NHS number"
                name="nhsNumber"
                value={formValues.nhsNumber}
                // onChange={handleInputChange}
                required
              />
        
              <Button>Enter</Button>
            
          </Fieldset>
        </FormGroup>
      
      </Main>
      
      <Footer />
    </div>
  );
};

export default RegistrationPage;
