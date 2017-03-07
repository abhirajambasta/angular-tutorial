import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AngularComponent} from './angular/angular.component';
import {CustomComponent} from './custom/custom.component';

const routes: Routes = [
  {
  path:'',
  component :HomeComponent,

  children:[
   {
  path:'',
  redirectTo: 'angular',
   pathMatch: 'full' 
},
{
  path:'angular',
  component: AngularComponent
 },
{
  path:'custom',
  component: CustomComponent
}
  ]


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PipesRoutingModule { }
