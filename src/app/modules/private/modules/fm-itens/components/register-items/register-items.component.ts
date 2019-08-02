import { FmItemsService } from './../../services/fm-items.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-items',
  templateUrl: './register-items.component.html',
  styleUrls: ['./register-items.component.css']
})
export class RegisterItemsComponent implements OnInit {

  formItem: FormGroup;
  listaTipos: any[];

  constructor(
    private cadastroItensService: FmItemsService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.buscarListaTipos();
    this.criarFormItens();
  }

  salvarItens() {
    const item = this.formItem.value;
    this.cadastroItensService.salvarItem(item).subscribe(
      () => { this.formItem.reset(), this.router.navigateByUrl('/ctis/itens/pesquisar') }
    );
  }

  criarFormItens() {
    this.formItem = this.fb.group({
      codigo: [],
      tipo: [],
      marca: [],
      cor: [],
      valor: [],
      descricao: []
    })
  }

  buscarListaTipos() {
    this.cadastroItensService.buscarTipos().subscribe(
      res => this.listaTipos = res
    )
  }

}
