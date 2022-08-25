import { CardActionArea } from '@mui/material';
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
    ammendProblem(state, action) {
      return state.map((problem) => {
        return problem.id === action.payload.id ? action.payload : problem;
      });
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

export const updateProblem = (obj) => {
  return async (dispatch) => {
    const updatedProblem = await problemService.update(obj);
    dispatch(ammendProblem(updatedProblem));
  };
};

export const { addProblem, setProblems, ammendProblem } = problemSlice.actions;
export default problemSlice.reducer;
