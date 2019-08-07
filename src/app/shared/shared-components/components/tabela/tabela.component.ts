import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {


  constructor(
  ) { }

  titulos: string[];
  descricoes: string[];
  valores = [
    {
      nome: "luan",
      rg: 123,
      cpf: 123,
      email: "luan@gmail.com"
    },
    {
      nome: "luander",
      rg: 1233,
      cpf: 1233,
      email: "luandern@gmail.com"
    }
  ]

  ngOnInit() {
  }

  mapear() {
    
  }

}
