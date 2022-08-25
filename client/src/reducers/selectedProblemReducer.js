import { createSlice } from '@reduxjs/toolkit';

const selectedProblemSlice = createSlice({
  name: 'selectedProblem',
  initialState: {},
  reducers: {
    setSelectedProblem(state, action) {
      return action.payload;
    },
  },
});

export const { setSelectedProblem } = selectedProblemSlice.actions;
export default selectedProblemSlice.reducer;
