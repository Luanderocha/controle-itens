import { FmItemsService } from './../../services/fm-items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-items',
  templateUrl: './register-items.component.html',
  styleUrls: ['./register-items.component.css']
})
export class RegisterItemsComponent implements OnInit {

  listaTipos: any[];

  constructor(
    // private cadastroItensService: FmItemsService,
  ) { }

  ngOnInit() {
    // this.buscarListaTipos();
  }

  // buscarListaTipos(){
  //   this.cadastroItensService.buscarTipos().subscribe(
  //     res => this.listaTipos = res
  //   )
  // }

}
