import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import Create from '../create';
import Login from '../login';

const RoutingPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/problems" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default RoutingPath;
