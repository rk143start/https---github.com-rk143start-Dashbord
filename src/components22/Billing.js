import React from 'react';
import './Billing.css';

const Billing = ({ selectedPatient }) => {
  return (
    <div className="billing-container">
      <h2>Billing</h2>
      {selectedPatient ? (
        <div>
          <h3>{selectedPatient.name}</h3>
          {/* Display the billing details for the selected patient */}
        </div>
      ) : (
        <p>Please select a patient from the Patient List</p>
      )}
    </div>
  );
};
export default Billing;