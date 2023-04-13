import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Tour {
  id: string;
  title: string;
  text: string;
  href: string;
  like: boolean;
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
      const existingTour = state.tours.find((tour) => tour.id === action.payload.id);
      if (!existingTour) {
        state.tours.push(action.payload);
      }
    },
  },
});


export const { addTour } = tourSlice.actions;

export const selectTours = (state: RootState) => state.tours.tours;

export default tourSlice.reducer;
