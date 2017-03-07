import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
submenu = [{
    name: 'HTTP',
    path: 'http'
  }];
  constructor() { }

  ngOnInit() {
  }

}
