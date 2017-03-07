import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
name = 'ABHIRAJ AMBASTA';
username = this.name.replace(' ','.');
myData = "My name is" + this.name ;
arg1 = 5;
arg2 = 1;
arg3 = 0;
  ngOnInit() {
  }

}
