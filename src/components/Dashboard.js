import React, { useState } from 'react';
// import './dashbord.css'

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const addPatient = () => {
    const newPatient = {
      id: Date.now(),
      name,
      age,
      city,
      contactNumber
    };

    setPatients([...patients, newPatient]);
    setName('');
    setAge('');
    setCity('');
    setContactNumber('');
  };

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="add-patient-form">
        <h3>Add Patient</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <button onClick={addPatient}>Add Patient</button>
        </form>
      </div>
      <div className="patient-list">
        <h3>Patient List</h3>
        {patients.length === 0 ? (
          <p>No patients added yet.</p>
        ) : (
          <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Contact Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.city}</td>
                  <td>{patient.contactNumber}</td>
                  <td>
                    <button onClick={() => deletePatient(patient.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
