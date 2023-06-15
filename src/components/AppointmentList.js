import React, { useState } from 'react';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = () => {
    const newAppointment = {
      id: Date.now(),
      patientName: '',
      appointmentTime: '',
      details: ''
    };

    setAppointments([...appointments, newAppointment]);
  };

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
  };

  const handleInputChange = (id, field, value) => {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === id) {
        return { ...appointment, [field]: value };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointment-container">
      <h2>Appointments</h2>
      <button onClick={addAppointment}>Add Appointment</button>
      {appointments.length === 0 ? (
        <p>No appointments added yet.</p>
      ) : (
        <ul className="appointment-list">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment-item">
              <div className="appointment-details">
                <input
                  type="text"
                  value={appointment.patientName}
                  onChange={(e) => handleInputChange( appointment.id, 'patientName',e.target.value )}
                  placeholder="Patient Name"
                />
                <input
                  type="text"
                  value={appointment.appointmentTime}
                  onChange={(e) =>
                    handleInputChange(
                      appointment.id,
                      'appointmentTime',
                      e.target.value
                    )
                  }
                  placeholder="Appointment Time"
                />
                <textarea
                  value={appointment.details}
                  onChange={(e) =>
                    handleInputChange(appointment.id, 'details', e.target.value)
                  }
                  placeholder="Details"
                />
              </div>
              <button
                className="delete-button"
                onClick={() => deleteAppointment(appointment.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointment;
