import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Login from './login';
import Signup from './Signup';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
