import React, { useState } from "react";
import {
  Fieldset,
  InputField,
  Button,
  FormGroup,
  BackLink,
  Main
} from "govuk-react";
import { Link } from "react-router-dom";
import Header from '../../Components/DefaultHeader';
import Footer from '../../Components/Footer';

function RegistrationPage(){
  const [formValues, setFormValues] = useState({
    nhsNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form values, e.g. submit to server
  };

  return (
    <div>
      <Header />  
      <Main>
        <BackLink href="/homepage" onClick={function noRefCheck(){}}>
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
              required
              onChange={(e) => setFormValues({ ...formValues, nhsNumber: e.target.value })}
            />
    
            <Button>Enter</Button>
          </Fieldset>
        </FormGroup>

        <Link to="/registerPersonalDetails" style={{ position: "fixed"}}>
          Register with personal info
        </Link>
      </Main>

      <Footer />      
    </div>
  );
};

export default RegistrationPage;
