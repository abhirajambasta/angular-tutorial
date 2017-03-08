import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { SharedService } from './shared.service';
import { ServicesRoutingModule } from './services-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { SharedComponent } from './shared/shared.component';
import { SharedAgainComponent } from './shared-again/shared-again.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, HttpComponent, SharedComponent, SharedAgainComponent],
  providers: [SharedService]
})
export class ServicesModule { }
