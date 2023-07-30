import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import UserDashboard from "./User_Files/UserDashboard"
import Homepage from './HomePage_Files/Homepage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/user' element={<UserDashboard />} />
      {/* <Route path="/user/dashboard/:id" element={<UserDashboard />} /> */}
    </Routes>
  )
}

export default App