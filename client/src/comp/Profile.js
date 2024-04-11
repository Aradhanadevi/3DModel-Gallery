import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
export const Profile = () => {
  // Retrieve user information from local storage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const name = localStorage.getItem('name');
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem('userInfo');
    localStorage.removeItem('name');
    // Redirect to the login page or any other appropriate page
    // For example, you can use navigate from react-router-dom if you're using it
    navigate('/');
  };

  return (
    <div className='profile-container'>
      <h1 className='profile-header'>Profile</h1>
      {userInfo && (
        <div>
          <p className='profile-info'>Name: {userInfo.name}</p>
          <p className='profile-info' >Email: {userInfo.email}</p>
          <p className='profile-info' >Phone: {userInfo.phone}</p>
          <p className='profile-info' >Work: {userInfo.work}</p>
          <button className='profile-info' onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};
