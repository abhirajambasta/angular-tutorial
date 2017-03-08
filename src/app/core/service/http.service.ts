import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private Title = 'http://192.168.1.6:8887/json.txt';// URL to web api
  private footerLinks = "";
  constructor(private http: Http) { }
gettitle(): Promise<{}> {
    return this.http.get(this.Title)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

