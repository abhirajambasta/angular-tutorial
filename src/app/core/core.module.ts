import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HttpService } from './service/http.service';
@NgModule({
    imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core Module Already Exists');
        }
    }
}