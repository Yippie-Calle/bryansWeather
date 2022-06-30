import { createAction, props } from '@ngrx/store';
import { History } from '../../weatherApp/weatherApp.model';

export const addHistory = createAction(
  '[History Page] Add History',
  props<{ content: string }>()
);
