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

        <p>Enter your email address</p>

          <Fieldset>
            <b>Email Address</b>
              <InputField
                label="Enter email address"
                name="email"
                value={formValues.email}
                // onChange={handleInputChange}
                required/>
        
              <Link to='/staffPassword'>
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