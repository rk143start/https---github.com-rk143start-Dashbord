import React, { useState } from 'react';

const Billing = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', bill: 100 },
    { id: 2, name: 'Jane Smith', bill: 200 },
    { id: 3, name: 'David Johnson', bill: 150 }
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const viewBill = (patientId) => {
    const selected = patients.find((patient) => patient.id === patientId);
    setSelectedPatient(selected);
  };

  const closeBill = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="billing-container">
      <h2>Billing</h2>
      <table className="patient-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Bill</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.bill}</td>
              <td>
                <button onClick={() => viewBill(patient.id)}>View Bill</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPatient && (
        <div className="bill-details">
          <h3>Bill Details</h3>
          <p>
            <strong>Patient Name:</strong> {selectedPatient.name}
          </p>
          <p>
            <strong>Bill Amount:</strong> ${selectedPatient.bill}
          </p>
          <button onClick={closeBill}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Billing;
