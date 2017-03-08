import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/service/http.service';
import { DataService } from '../../../core/service/http.interceptor';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
items: any;
constructor(httpService: HttpService, data: DataService) {
    httpService.gettitle().then(response => {
      this.items = response["items"];
    })
  }
  ngOnInit() {
  }

}
