import '../../App.css';
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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  
  let history = useNavigate();

  return (
    <div>
      <Header />  
      <Main>
        <BackLink onClick={() => history(-1)}>
          Back
        </BackLink>

        <FormGroup onSubmit={handleSubmit}>
        <div class='login-heading'> <H2>STAFF</H2></div>

          <Fieldset>
            <b>Password</b>
              <InputField
                label="Enter password"
                name="password"
                value={formValues.password}
                // onChange={handleInputChange}
                required/>
        
            <Link>
                <Button>Enter</Button>
              </Link>
          </Fieldset>
        </FormGroup>
      
      </Main>
      
      <Footer />
    </div>
  );
};

export default RegistrationPage;