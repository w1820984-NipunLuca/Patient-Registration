import './App.css';
import React from "react";
import {
  Button,
  Main,
  H2,
  BackLink
} from "govuk-react";
import Header from './Components/DefaultHeader';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  const handleStaffClick = () => {
    // Redirect to Staff page
  };

  return (
    <div>
        <Header />

        <Main>
            <BackLink onClick={function noRefCheck(){}}>
              Back
            </BackLink>

            <div className="box">
                <H2>Register</H2>
                <Button>Enter</Button>
                
                {/* <Link to="/Register-NHSnumber">
                  <Button>Enter</Button>
                </Link> */}
            </div>
            <div className="box">
                <H2>Log In</H2>
                <Button>Enter</Button>
            </div>
            <div className="box">
                <H2>Staff</H2>
                <Button onClick={handleStaffClick}>Enter</Button>
            </div>
        </Main>

        <Footer />
    </div>
  );
}

export default HomePage;
