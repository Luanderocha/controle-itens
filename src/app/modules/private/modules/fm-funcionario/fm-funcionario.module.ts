import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmFuncionarioRoutingModule } from './fm-funcionario-routing.module';
import { PesquisarFuncionarioComponent } from './components/pesquisar-funcionario/pesquisar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/cadastrar-funcionario/cadastrar-funcionario.component';
import { FmFuncionarioService } from './services/fm-funcionario.service';


@NgModule({
  declarations: [PesquisarFuncionarioComponent, CadastrarFuncionarioComponent],
  imports: [
    CommonModule,
    FmFuncionarioRoutingModule 
  ],
  providers:[FmFuncionarioService]
})
export class FmFuncionarioModule { }
