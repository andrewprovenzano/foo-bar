import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  // DI via TS automatic property
  constructor(private sdSvc: SharedDataService) { }

  ngOnInit() {
  }

  //sharedData = 'Foo Shared Data';
  get sharedData() {
    return this.sdSvc.data;
  }

  changeSharedData = () => {
    console.log('changeSharedData()');
    this.sdSvc.data = 'foo';
  }
}
