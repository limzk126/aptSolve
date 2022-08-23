import { createSlice } from '@reduxjs/toolkit';
import problemService from '../services/problem';

const problemSlice = createSlice({
  name: 'problem',
  initialState: [],
  reducers: {
    addProblem(state, action) {
      state.push(action.payload);
    },
    setProblems(state, action) {
      return action.payload;
    },
  },
});

export const createProblem = (obj) => {
  return async (dispatch) => {
    const newProblem = await problemService.create(obj);
    dispatch(addProblem(newProblem));
  };
};

export const initializeProblems = () => {
  return async (dispatch) => {
    const problems = await problemService.getAll();
    dispatch(setProblems(problems));
  };
};

export const { addProblem, setProblems } = problemSlice.actions;
export default problemSlice.reducer;
