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
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import RegisterNHSNumberPage from './Pages/Registration/Register-NHSnumber';
import PatientLogInPage from './Pages/Login/PatientLogIn';

function App() {
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
            <Link to='/RegisterNHSNumberPage'>
              <Button>Enter</Button>
            </Link>
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
      

      <Routes>
        <Route path="/RegisterNHSNumberPage" element={<RegisterNHSNumberPage />} />
        <Route path="/login" element={<PatientLogInPage />} />
        
      
    </Routes>
    </div>
  );
}

export default App;
