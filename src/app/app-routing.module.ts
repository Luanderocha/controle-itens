import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'' , redirectTo:'ctis' , pathMatch:'full'},
  {path: 'ctis', loadChildren: './modules/private/private.module#PrivateModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
