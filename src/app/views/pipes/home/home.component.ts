import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
submenu = [{
    name: 'Angular',
    path: 'angular'
  }, {
    name: 'Custom',
    path: 'custom'
  }];
  constructor() { }

  ngOnInit() {
  }

}
