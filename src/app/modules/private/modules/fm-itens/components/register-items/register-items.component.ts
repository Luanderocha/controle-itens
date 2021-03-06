import { CampoTipoInterface } from './../../models/tipo.interface';
import { FmItemsService } from './../../services/fm-items.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemInterface } from '../../models/item.interface';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './register-items.component.html',
  styleUrls: ['./register-items.component.css']
})
export class RegisterItemsComponent implements OnInit {

  formItem: FormGroup;
  campoTipo: CampoTipoInterface[];
  titulo;

  constructor(
    private itensService: FmItemsService,
    private fb: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.buscarCampoTipo();
    this.criarFormItens();
    this.titulo = this.activateRoute.snapshot.data;
  }

  criarFormItens() {
    this.formItem = this.fb.group({
      codigo: [null, Validators.required],
      tipo: [null, Validators.required],
      marca: ['', Validators.required],
      cor: ['', Validators.required],
      valor: [null, Validators.required],
      descricao: ['', Validators.required],
      id: [, Validators.required]
    });
    this._preencherFormEdicao();
  }

  get id() {
    return this.activateRoute.snapshot.params['id'];
  }

  /**
   * Método responsável por preencher os campos do formulário para edição.
   * @author Luanderson Silva
   */
  private _preencherFormEdicao() {
    if (this.id) {
      this.itensService.buscarItemId(this.id).subscribe(
        item => this.formItem.setValue(item)
      );
    }
  }

  buscarCampoTipo() {
    this.itensService.buscarTipos().subscribe(
      res => this.campoTipo = res
    );
  }

  voltar() {
    this.router.navigateByUrl('/ctis/home/itens/pesquisar');
  }

  salvarItens() {
    const corpoRequisicao: Observable<ItemInterface> =
      this.atualizarForm()
        ? this.itensService.atualizarItem(this.formItem.value.id, this.formItem.value)
        : this.itensService.salvarItem(this.formItem.value);
    corpoRequisicao.subscribe(
      () => {
        alert('Sucess')
        this.formItem.reset();
        this.voltar();
      }
    );
  }

  atualizarForm(): boolean {
    return this.formItem.value.id != undefined;
  }
}