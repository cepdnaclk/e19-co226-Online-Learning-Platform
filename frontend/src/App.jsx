import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './HomePage_Files/Homepage';
import About from './HomePage_Files/About'
import Services from './HomePage_Files/Services'
import Contact from './HomePage_Files/Contact'

import User from './User_Files/User';
import UserCourses from './User_Files/UserCourses';
import UserContact from './User_Files/UserContact';

function App() {

  return (
    <Routes>
      {/* HomePage */}
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* <Route path="/user/dashboard/:id" element={<UserDashboard />} /> */}
      {/* User */}
      <Route path="/user" element={<User />} />
      <Route path="/user/courses" element={<UserCourses />} />
      <Route path="/user/contact" element={<UserContact />} />

      {/* Tutor */}
    </Routes>
  )
}

export default App