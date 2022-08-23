import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header';
import RoutingPath from './components/routing/routingPath';
import { initializeProblems } from './reducers/problemReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProblems());
  });

  return (
    <div>
      <Header />
      <RoutingPath />
    </div>
  );
}

export default App;
