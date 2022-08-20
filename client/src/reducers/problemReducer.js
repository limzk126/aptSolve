import { createSlice } from '@reduxjs/toolkit';

const problemSlice = createSlice({
  name: 'problem',
  initialState: [],
  reducers: {
    createProblem(state, action) {},
  },
});

export const { createProblem } = problemSlice.actions
export default problemSlice.reducer
