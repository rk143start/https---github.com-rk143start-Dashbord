import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profilepage.css';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('https://storebh.bhaaraterp.com/api/my-profile/', {
        headers: {
          Token: '<your-access-token>'
        }
      });

      // Set the profile data in state
      setProfileData(response.data);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEmail(response.data.email);
      setGender(response.data.gender);
      setDateOfBirth(response.data.date_of_birth);
      setProfilePicture(response.data.profile_picture);
    } catch (error) {
    console.log(error)
    }
  };

  const updateProfile = async () => {
    try {
     
      await axios.post(
        'https://storebh.bhaaraterp.com/api/update-profile/',
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          gender: gender,
          date_of_birth: dateOfBirth,
          profile_picture: profilePicture
         
        },
        {
          headers: {
            Token: '<your-access-token>'
            
          }
          
        }
      );

     
      navigate('/');

    }catch (error) {
     console.log(error)
    }
  };

  return (
    <div className="profile-page">
      
      <h2>Personal Information</h2>
    {/* <img className='imgData1' src="./assets/shiging.jpg" alt="" /> */}
      <div className="update-profile-container">
        <h3>Update Profile:</h3><br />
        <p>First Name: {profileData.first_name}</p>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
          <p>Last Name: {profileData.last_name}</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
         <p>Email: {profileData.email}</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
         <p>Gender: {profileData.gender}</p>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
        <p>Date of Birth: {profileData.date_of_birth}</p>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          placeholder="Date of Birth"
        />
        <p>Profile Picture: {profileData.profile_picture}</p>
        <input
          type="file"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder="Profile Picture"
        /> <br />
        <button onClick={updateProfile}>Update Profile</button>
      </div>
    </div>
  );
};

export default ProfilePage;
