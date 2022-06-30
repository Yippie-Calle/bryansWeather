import { createAction, props } from '@ngrx/store';
import { History } from '../../weatherApp/weatherApp.model';

export const addHistory = createAction(
  '[History Page] Add History',
  props<{ content: string }>()
);
export const removeHistory = createAction(
  '[History Page] Remove History',
  props<{ id: string }>()
);

export const loadHistory = createAction('[History Page] Load History');

export const loadHistorySuccess = createAction(
  '[History API] History Load Success',
  props<{ history: History[] }>()
);

export const loadHistoryFaliure = createAction(
  '[History API] History Load Faliure',
  props<{ error: string }>()
);
