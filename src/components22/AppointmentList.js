import React from 'react';
import './appointmentList.css';

const AppointmentList = () => {
  const appointments = [
        { id: 1, time: '10:00 AM', patient: 'John Doe' },
        { id: 2, time: '11:00 AM', patient: 'Jane Smith' },
        // Add more appointment data as needed
      ];

    
  return (
    <div className="appointment-list-container">
      <h2>Appointment List</h2>
      {/* Add your appointment list content here */}
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Patient</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.time}</td>
                  <td>{appointment.patient}</td>
                </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default AppointmentList;

// import React from 'react';
// import './appointmentList.css';

// const AppointmentList = () => {
//   const appointments = [
//     { id: 1, time: '10:00 AM', patient: 'John Doe' },
//     { id: 2, time: '11:00 AM', patient: 'Jane Smith' },
//     // Add more appointment data as needed
//   ];

//   return (
//     <div className="appointment-list-container">
//       <h2>Appointment List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Time</th>
//             <th>Patient</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment.id}>
//               <td>{appointment.time}</td>
//               <td>{appointment.patient}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AppointmentList;
