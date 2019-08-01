import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';


const routes: Routes = [
  { path:'', component:HomeAdmComponent},
  { path:'itens', loadChildren:'./modules/fm-itens/fm-itens.module#FmItensModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
