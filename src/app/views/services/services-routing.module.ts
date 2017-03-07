import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HttpComponent} from './http/http.component';

const routes: Routes = [
  {
  path:'',
  component :HomeComponent,

  children:[
   {
  path:'',
  redirectTo: 'http',
   pathMatch: 'full' 
},
{
  path:'http',
  component: HttpComponent
 }
  ]


}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ServicesRoutingModule { }
