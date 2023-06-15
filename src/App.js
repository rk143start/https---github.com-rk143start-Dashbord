// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import PatientList from './components/PatientList';
// import AppointmentList from './components/AppointmentList';
// import Billing from './components/Billing';
// import SearchBar from './components/SearchBar';
// import PatientDetails from './components/PatientDetails';
// import './App.css';

// const App = () => {
//   return (
//     <>
//        <div className="app-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <a href="/">Dashboard</a>
//             </li>
//             <li>
//               <a href="/patients">Patient</a>
//             </li>
//             <li>
//               <a href="/appointments">Appointment</a>
//             </li>
//             <li>
//               <a href="/billing">Billing</a>
//             </li>
//           </ul>
//         </nav> 
//         <SearchBar />     
//         <div className="content">
//             <Routes>
//             <Route exact path="/" element={ <Dashboard />} />
//             <Route exact path="PatientList" element ={ <PatientList />} />
//             <Route exact path="AppointmentList" element ={<AppointmentList />} />
//             <Route exact path="Billing" element={<Billing />} />
//             <Route exact path="PatientDetails" element ={<PatientDetails />} />
//         </Routes>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PatientList from './components/PatientList';
import AppointmentList from './components/AppointmentList';
import Billing from './components/Billing';
import SearchBar from './components/SearchBar';
import PatientDetails from './components/PatientDetails';

// import InfoAll from './components/InfoAll'
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className="app-container">
        <SearchBar className= "sidebar"/>
        <div className="content resolution">
           <Routes>
            <Route exact path="/" element={ <Dashboard />} />
             <Route exact path="PatientList" element ={ <PatientList />} />
            <Route exact path="AppointmentList" element ={<AppointmentList />} />
            <Route exact path="Billing" element={<Billing />} />
             <Route exact path="PatientDetails" element ={<PatientDetails />} />
         </Routes>

         </div>
      </div>
      <nav className="sidebar">
          <ul className= "mainComp">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/PatientList">Patient</a>
            </li>
            <li>
              <a href="/AppointmentList">Appointment</a>
            </li>
            <li>
              <a href="/billing">Billing</a>
            </li>
          </ul>
          </nav>
    </div>
  );
};

export default App;

