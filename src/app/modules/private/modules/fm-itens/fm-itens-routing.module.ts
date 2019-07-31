import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import { RegisterItemsComponent } from './components/register-items/register-items.component';


const routes: Routes = [
  {path:'' , redirectTo: 'search' , pathMatch:'full'},
  {path:'search' , component:SearchItemsComponent},
  {path:'register', component:RegisterItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmItensRoutingModule { }
