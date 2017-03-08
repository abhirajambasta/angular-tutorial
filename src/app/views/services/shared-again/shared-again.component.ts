import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shared-again',
  templateUrl: './shared-again.component.html',
  styleUrls: ['./shared-again.component.scss']
})
export class SharedAgainComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.Logger("info", "I am loading the shared-again component");
  }

  Logger(console: string, txt: string) {
    this.sharedService[console](txt);
  }

  calciroot() {
    this.sharedService.getVal();
  }

}
