import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addHistory,
  removeHistory,
  loadHistory,
} from '../state/history/history.actions';
import { selectAllHistory } from '../state/history/history.selector';
import { History } from './weatherApp.model';

@Component({
  selector: 'app-history',
  templateUrl: 'weatherApp.page.html',
  styleUrls: ['weatherApp.page.scss'],
})
export class HistoryPage implements OnInit {
  public allHistory$ = this.store.select(selectAllHistory);
  public history = '';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadHistory());
  }

  addTodo() {
    this.store.dispatch(addHistory({ content: this.history }));
    this.history = '';
  }

  removeTodo(history: History) {
    this.store.dispatch(removeHistory({ id: history.id }));
  }
}
