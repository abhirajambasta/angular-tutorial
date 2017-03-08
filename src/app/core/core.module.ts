import { NgModule, Optional, SkipSelf } from '@angular/core';
import { XHRBackend,RequestOptions  } from '@angular/http';
import { CommonModule } from '@angular/common';

import { HttpService } from './service/http.service';
import { HttpInterceptor } from './interceptor/interceptor.service';
@NgModule({
    imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpService,
  { provide: HttpInterceptor, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => 
       new HttpInterceptor(backend, defaultOptions),
    deps: [XHRBackend, RequestOptions]
  }]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core Module Already Exists');
        }
    }
}



/*
 
providers: [InterceptorService,
    {provide : LocationStrategy,  useClass: HashLocationStrategy },
    {provide : Http, 
        useFactory : (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new InterceptorService(xhrBackend, requestOptions, router),
        deps: [XHRBackend, RequestOptions, Router]
    }
] 
import { NgModule, Optional, SkipSelf } from '@angular/core';

import {Http, HttpModule, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import { Router} from '@angular/router';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
 
import { InterceptorService } from './services/interceptor.service'; 

*/