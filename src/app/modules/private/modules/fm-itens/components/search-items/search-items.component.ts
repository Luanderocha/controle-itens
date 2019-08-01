import { Component, OnInit } from '@angular/core';
import { FmItemsService } from '../../services/fm-items.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  listaItens: any[];

  constructor(
    private itensService: FmItemsService,
  ) { }

  ngOnInit() {
    this.buscarListaItens();
  }

  buscarListaItens() {
    this.itensService.buscarItens().subscribe(
      res => this.listaItens = res
    )
  }



}
