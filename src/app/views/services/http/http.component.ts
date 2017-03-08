import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/service/http.service';
import { HttpInterceptor } from '../../../core/interceptor/interceptor.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
items: any;
constructor(http: HttpInterceptor) {
    console.log(http.get('http://127.0.0.1:8887/title.json'));
    http.get('http://127.0.0.1:8887/title.json').toPromise().then(response => {
      console.log(response);
    })
  }
  ngOnInit() {
  }

}
