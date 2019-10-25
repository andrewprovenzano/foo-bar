import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

// DI via TS automatic property

  constructor() { }

  //data = 'Uninitialized';
  private internalData = 'Uninitialized';
  public get data() {
    console.log('Getter');
    return this.internalData;
  }

  public set data(value) {
    console.log('Setter');
    this.internalData = value;
  }
}
