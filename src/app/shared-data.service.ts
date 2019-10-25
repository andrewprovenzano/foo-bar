import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

// DI via TS automatic property

  constructor() { }

  data = 'Uninitialized';
}
