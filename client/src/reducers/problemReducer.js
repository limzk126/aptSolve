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
    removeProblem(state, action) {
      return state.filter((problem) => {
        return problem.id !== action.payload;
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

export const deleteProblem = (id) => {
  return async (dispatch) => {
    await problemService.deleteProblem(id);
    dispatch(removeProblem(id));
  };
};

export const { addProblem, setProblems, ammendProblem, removeProblem } =
  problemSlice.actions;
export default problemSlice.reducer;
