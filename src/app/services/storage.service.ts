import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  addStorage(key:string, value:string) {
    this.storage.set(key, value);
  }

  updateStorage(key:string, newValue:string) {
    this.storage.set(key, newValue);
    this.getAllStorages();
  }

  deleteStorage(key:string) {
    this.storage.remove(key);
  }

  getAllStorages() {
    const storages: any = [];
    this.storage.forEach((key, value, index) => {
      storages.push({ 'key': value, 'value': key })
    });
    return storages;
  }

  async init() {
    await this.storage.create();
  }
}
