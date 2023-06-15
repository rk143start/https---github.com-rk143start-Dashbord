import React from 'react';
import './PatientDetails.css';

const PatientDetails = ({ patientId }) => {
  const patientDetails = {
    id: 1,
    name: 'John Doe',
    bill: 200,
  };

  return (
    <div className="patient-details-container">
      <h2>Patient Details</h2>
      <p>Patient ID: {patientDetails.id}</p>
      <p>Name: {patientDetails.name}</p>
      <p>Bill: {patientDetails.bill}</p>
    </div>
  );
};
export default PatientDetails;