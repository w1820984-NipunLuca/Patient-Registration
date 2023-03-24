import './App.css';
import React, { useState } from "react";
import {
  Fieldset,
  InputField,
  Button,
  Footer,
  FormGroup,
  Link,
  BackLink,
  TopNav, Main
} from "govuk-react";
//Hello Luka..nskjksjgjmkfjhdgjhsdfjshdfg heeelo
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
    <body>
      <TopNav>
        <TopNav.NavLink>Home</TopNav.NavLink>
      </TopNav>

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
      
            <Button>Submit</Button>
          
        </Fieldset>
      </FormGroup>
      
      </Main>
      <div class="footer">
        <Footer>
            <Link href="#">Terms and conditions </Link>
            <Link href="#">Contact us </Link>
        </Footer>
      </div>
    </body>
  );
};

export default RegistrationPage;
