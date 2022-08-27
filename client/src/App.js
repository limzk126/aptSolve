import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import RoutingPath from './components/routing/routingPath';
import { initializeProblems } from './reducers/problemReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProblems());
  });

  return <RoutingPath />;
}

export default App;
