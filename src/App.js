import './App.css';
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import RegisterNHSNumber from './Pages/Registration/Register-NHSnumber';
import RegisterPersonalDetails from './Pages/Registration/Register-PersonalDetails';
import PatientLogInPage from './Pages/Login/PatientLogIn';

function App() {
  return (
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/registerNHSnumber" element={<RegisterNHSNumber />} />
        <Route path="/registerPersonalDetails" element={<RegisterPersonalDetails />} />
        <Route path="/login" element={<PatientLogInPage />} />
        
      </Routes>
    
  );
}

export default App;
