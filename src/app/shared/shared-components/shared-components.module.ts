import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MensagemValidacaoComponent } from './components/mensagem-validacao/mensagem-validacao.component';
import { TabelaComponent } from './components/tabela/tabela.component';


@NgModule({
  declarations: [HeaderComponent, MensagemValidacaoComponent, TabelaComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    MensagemValidacaoComponent,
    TabelaComponent
  ]
})
export class SharedComponentsModule { }
