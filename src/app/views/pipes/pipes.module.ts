import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { CustomComponent } from './custom/custom.component';
import { OneParamPipe } from './custom/custom.pipe';
import { TwoParamPipe } from './custom/custom2.pipe';
import { TwooParamPipe } from './custom/custom3.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, AngularComponent, CustomComponent, OneParamPipe, TwoParamPipe, TwooParamPipe]
})
export class PipesModule { }
