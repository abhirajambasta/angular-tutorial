import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpInterceptor } from '../interceptor/interceptor.service'

@Injectable()
export class DataService {

  constructor(public http: HttpInterceptor) {};

  getData() {
    return this
      .http.get(`data?limit=20&offset=40`)
      // will hit the api on http://api.localhost.com:4000/data?limit=20&offset=40
      .map(res => res.json().data)
  }

}

