import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addHistory,
  removeHistory,
  loadHistory,
  loadHistorySuccess,
  loadHistoryFaliure,
} from './history.actions';
import { HistoryService } from '../../weatherApp/weatherApp.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllHistory } from './history.selector';
import { AppState } from '../app.state';

@Injectable()
export class HistoryEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private historyService: HistoryService
  ) {}

  //Run this code when a loadHistory action is dispatched

  loadHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHistory),
      switchMap(() =>
        //Call the getHistory method, convert it to an observable
        from(this.historyService.getHistory()).pipe(
          //Take the returened value and return a new success action containing the history
          map((history) => loadHistorySuccess({ history: history })),
          //Or... if it errors return a new faliure action containing the error
          catchError((error) => of(loadHistoryFaliure({ error })))
        )
      )
    )
  );

  //Run this code when the addhistory or remove History action is dispatched

  saveHistory$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addHistory, removeHistory),
        withLatestFrom(this.store.select(selectAllHistory)),
        switchMap(([action, history]) =>
          from(this.historyService.saveHistory(history))
        )
      ),
    //Most effects dispatch another action, but this one is just a "fire and forget effect"
    { dispatch: false }
  );
}
