import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
stat = new Date();
yourName = 'nayak';
times = 5;
amount = 5.50;
toggle = true;

  ngOnInit() {
  }

}
