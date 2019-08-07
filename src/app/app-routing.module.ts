import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'ctis', pathMatch: 'full' },
  // {path: 'ctis', loadChildren: './modules/private/private.module#PrivateModule'}
  { path: 'ctis', loadChildren: './modules/public/public.module#PublicModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
