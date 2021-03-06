import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import { RegisterItemsComponent } from './components/register-items/register-items.component';


const routes: Routes = [
  { path: '', redirectTo: 'pesquisar', pathMatch: 'full' },
  { path: 'pesquisar', component: SearchItemsComponent },
  { path: 'cadastrar', component: RegisterItemsComponent, data: { titulo: 'Cadastrar' } },
  { path: 'editar/:id', component: RegisterItemsComponent, data: { titulo: 'Editar' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmItensRoutingModule { }
