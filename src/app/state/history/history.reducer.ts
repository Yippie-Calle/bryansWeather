import { createReducer, on } from '@ngrx/store';
import {
  addHistory,
  removeHistory,
  loadHistory,
  loadHistorySuccess,
  loadHistoryFaliure,
} from './history.actions';
import { History } from '../../weatherApp/weatherApp.model';

export interface HistoryState {
  history: History[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: HistoryState = {
  history: [],
  error: '',
  status: 'pending',
};

export const historyReducer = createReducer(
  //Supply the inital state
  initialState,
  //Add the new history to the history array
  on(addHistory, (state, { content }) => ({
    ...state,
    history: [
      ...state.history,
      { id: Date.now().toString(), content: content },
    ],
  })),
  //Remove the history from the history array
  on(removeHistory, (state, { id }) => ({
    ...state,
    history: state.history.filter((history) => history.id !== id),
  })),
  // Trigger loading the history
  on(loadHistory, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded history
  on(loadHistorySuccess, (state, { history }) => ({
    ...state,
    history: history,
    error: '',
    status: 'success',
  })),
  //Handle history load faliure
  on(loadHistoryFaliure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
