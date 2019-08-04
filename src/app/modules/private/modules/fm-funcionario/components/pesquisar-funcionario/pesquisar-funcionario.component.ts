import { Component, OnInit } from '@angular/core';
import { FmFuncionarioService } from '../../services/fm-funcionario.service';

@Component({
  templateUrl: './pesquisar-funcionario.component.html',
  styleUrls: ['./pesquisar-funcionario.component.css']
})
export class PesquisarFuncionarioComponent implements OnInit {

  listaFuncionarios:any[];

  constructor(
    private funcionarioService: FmFuncionarioService,
  ) { }

  ngOnInit() {
    // this.montarListaFuncionarios();
  }

  // montarListaFuncionarios(){
  //   this.funcionarioService.listarFuncionarios().subscribe(
  //     res => this.listaFuncionarios = res
  //   );
  // }

  // deletarFuncionarioId(){
    
  // }

}
