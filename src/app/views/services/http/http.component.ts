import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/service/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
items: any;
  constructor(httpService: HttpService) {
    httpService.gettitle().then(response => {
      this.items = response["items"];
    })
  }
  ngOnInit() {
  }

}
