import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HttpService } from './service/http.service';
import { DataService } from './service/http.interceptor';
@NgModule({
    imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpService, DataService],
  // bootstrap: [{
  //   provide: HttpInterceptor,
  //   useFactory:
  //   (backend: XHRBackend, defaultOptions: RequestOptions) => {
  //     return new HttpService(backend, defaultOptions);
  //   },
  //   deps: [XHRBackend, RequestOptions, LoaderService, Store]
  // }]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core Module Already Exists');
        }
    }
}
