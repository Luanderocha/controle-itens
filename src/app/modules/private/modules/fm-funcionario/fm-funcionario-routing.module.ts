import { CadastrarFuncionarioComponent } from './components/cadastrar-funcionario/cadastrar-funcionario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarFuncionarioComponent } from './components/pesquisar-funcionario/pesquisar-funcionario.component';


const routes: Routes = [
  { path: '', redirectTo: 'pesquisar', pathMatch: 'full' },
  { path: 'pesquisar', component: PesquisarFuncionarioComponent },
  { path: 'cadastrar', component: CadastrarFuncionarioComponent },
  { path: 'editar/:id', component: CadastrarFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmFuncionarioRoutingModule { }
