// import React from 'react';
// import './PatientList.css';

// const PatientList = () => {
//   const patients = [
//     { id: 1, name: 'John Doe', bill: 100 },
//     { id: 2, name: 'Jane Smith', bill: 200 },
//     { id: 3, name: 'Alice Johnson', bill: 150 },
//   ];

//   return (
//     <div className="patient-list-container">
//       <h2>Patient List</h2>
//       <ul>
//         {patients.map((patient) => (
//           <li key={patient.id}>
//             {patient.name} - Bill: {patient.bill}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PatientList;


import React, { useState } from 'react';
import './PatientList.css'
import Billing from './Billing';
import InfoAll from './InfoAll'
import { Link } from "react-router-dom";

const PatientList = () => {
  const [searchText, setSearchText] = useState('');
  let [data, setData] = useState("")
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', bill: 200 },
    { id: 2, name: 'Jane Smith', bill: 300 },
    { id: 3, name: 'Ram Karhale', bill: 300 },
    { id: 4, name: 'Shyam Karhale', bill: 300 },
    { id: 5, name: 'Yuraj  kanhe', bill: 300 },
    { id: 6, name: 'Arradhya Jadhav', bill: 300 },
    { id: 7, name: 'Rock Singh', bill: 300 },

    // Add more patient data as needed
  ]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);

  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchText.toLowerCase())
  );

  let ClickHandler = (e) => {
    e.preventDefault()
    setData(patients)
  }

  return (
    <div className="patient-list-container">
      <h2>Patient List</h2>
      <input
      className='input'
        type="text"
        placeholder="Search patient"
        value={searchText}
        onChange={handleSearchChange}
      />
      <ul className='allDatas'>
        {filteredPatients.map((patient) => (
          <li key={patient.id}>
            <span>{patient.name}</span>
            <span>{patient.bill}</span><br />
            <button onClick={ClickHandler}>
              <Link to={`/Billing`} className='buttonData'>View Bill</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PatientList;