import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { History } from './weatherApp.model';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getHistory(): Promise<History[]> {
    if (!this.storageInitialised) await this.storage.create();
    return (await this.storage.get('history')) || [];
  }

  async saveHistory(history: History[]) {
    if (!this.storageInitialised) await this.storage.create();
    return this.storage.set('history', history);
  }
}
