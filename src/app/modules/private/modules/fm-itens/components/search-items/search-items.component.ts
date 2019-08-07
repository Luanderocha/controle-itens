import { Component, OnInit } from '@angular/core';
import { FmItemsService } from '../../services/fm-items.service';
import { ItemInterface } from '../../models/item.interface';

@Component({
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  itens: ItemInterface[];

  constructor(
    private itensService: FmItemsService,
  ) { }

  ngOnInit() {
    this.buscarListaItens();
  }

  // preencherCampo(item:string){
    
  // }

  buscarListaItens() {
    this.itensService.buscarItens().subscribe(
      res => this.itens = res
    );
  }

  deletarItemId(id:number) {
    this.itensService.excluirItemId(id).subscribe(
      () => this.buscarListaItens()
    );
  }




}
