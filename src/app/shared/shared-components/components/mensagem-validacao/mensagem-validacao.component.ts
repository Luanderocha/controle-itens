import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-validacao',
  templateUrl: './mensagem-validacao.component.html',
  styleUrls: ['./mensagem-validacao.component.css']
})
export class MensagemValidacaoComponent implements OnInit {

  @Input() texto: string;

  constructor() { }

  ngOnInit() {
  }

}
