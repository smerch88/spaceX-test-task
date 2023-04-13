import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Tour {
  id: string;
  name: string;
  description: string;
}

interface TourState {
  tours: Tour[];
}

const initialState: TourState = {
  tours: [],
};

const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    addTour: (state, action: PayloadAction<Tour>) => {
      state.tours.push(action.payload);
    },
  },
});

export const { addTour } = tourSlice.actions;

export const selectTours = (state: RootState) => state.tours.tours;

export default tourSlice.reducer;
