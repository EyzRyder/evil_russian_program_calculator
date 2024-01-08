import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  addStorage<T>(key:string, value:T) {
    this.storage.set(key, value);
  }

  updateStorage<T>(key:string, newValue:T) {
    this.storage.set(key, newValue);
    this.getAllStorages();
  }

  deleteStorage(key:string):Promise<void> {
   return this.storage.remove(key);
  }

  getAllStorages() {
    const storages: any[]= [];
    this.storage.forEach((key, value) => {
      storages.push({ 'key': value, 'value': key })
    });
    return storages;
  }

  getFromStorage<T>(key:string):Promise<T>{
    return this.storage.get(key);
  }

  private async init() {
    await this.storage.create();
  }
}
