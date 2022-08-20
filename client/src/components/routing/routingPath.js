import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import Create from '../create';

const RoutingPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default RoutingPath;
