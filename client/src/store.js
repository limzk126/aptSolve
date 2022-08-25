import { configureStore } from '@reduxjs/toolkit';
import problemReducer from './reducers/problemReducer';
import selectedProblemReducer from './reducers/selectedProblemReducer';

const store = configureStore({
  reducer: {
    problem: problemReducer,
    selectedProblem: selectedProblemReducer,
  },
});

export default store;
