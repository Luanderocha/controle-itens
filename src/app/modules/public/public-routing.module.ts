import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: './modules/private/private.module#PrivateModule' }
  // { path: 'home', canActivateChild:[AutGuard], loadChildren: './modules/private/private.module#PrivateModule' }
  // { path: 'home', canActivateChild: [AutGuard], children:[
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
