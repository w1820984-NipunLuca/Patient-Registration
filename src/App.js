import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';


import Homepage from './Pages/Homepage';

import RegisterNHSNumber from './Pages/Registration/Register-NHSnumber';
import RegisterPersonalDetails from './Pages/Registration/Register-PersonalDetails';
import RegisterEmail from './Pages/Registration/Register-Email';
import RegisterCreatePassword from './Pages/Registration/Register-CreatePassword';

import PatientLogInPage from './Pages/Login/PatientLogIn';
import StaffLogIn from './Pages/Login/StaffLogIn';
import PatientPassword from './Pages/Login/PatientPassword';
import StaffPassword from './Pages/Login/StaffPassword';

function App() {
  return (
      <Routes>
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/registerNHSnumber" element={<RegisterNHSNumber />} />
        <Route path="/registerPersonalDetails" element={<RegisterPersonalDetails />} />
        <Route path="/registerEmail" element={<RegisterEmail />} />
        <Route path="/registerCreatePassword" element={<RegisterCreatePassword />} />

        <Route path="/patientLogin" element={<PatientLogInPage />} />
        <Route path="/staffLogin" element={<StaffLogIn />} />
        <Route path="/patientPassword" element={<PatientPassword />} />
        <Route path="/staffPassword" element={<StaffPassword />} />
      </Routes>
  );
}

export default App;
