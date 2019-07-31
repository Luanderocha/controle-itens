import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent},
  { path: 'home', loadChildren: './modules/private/private.module#PrivateModule'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
