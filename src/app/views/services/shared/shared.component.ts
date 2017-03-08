import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.Logger("log", "I am loading the shared component");
  }

  Logger(console: string, txt: string){
      this.sharedService[console](txt);
  }

  calci(num1: number){
    this.sharedService.setVal(num1, Math.sqrt(num1));
  }
}
