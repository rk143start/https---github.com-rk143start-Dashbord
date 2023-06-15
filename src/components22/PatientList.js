import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './patientList.css';

const PatientList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const patients = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
  ];
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="patient-list-container">
      <h2>Patient List</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search patient"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="patient-list">
        {filteredPatients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/billing/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
