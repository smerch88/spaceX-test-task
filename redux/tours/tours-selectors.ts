import { RootState } from '../store';
import { Tour } from './tours-slice';

export const getTours = (state: RootState): Tour[] => state.tours.tours;
