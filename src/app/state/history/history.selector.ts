import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { HistoryState } from './history.reducer';

export const selectHistory = (state: AppState) => state.history;
export const selectAllHistory = createSelector(
  selectHistory,
  (state: HistoryState) => state.history
);
