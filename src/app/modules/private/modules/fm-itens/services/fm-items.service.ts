import { CampoTipoInterface } from './../models/tipo.interface';
import { ItemInterface } from './../models/item.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';


@Injectable()
export class FmItemsService {

  constructor(
    private http: HttpClient,
  ) { }

  buscarItens(): Observable<ItemInterface[]> {
    return this._emitirObs(this.http.get<ItemInterface[]>(this._montarRequisicaoUrl("itens")));
  }

  buscarItemId(id): Observable<ItemInterface> {
    return this._emitirObs(this.http.get<ItemInterface>(this._montarRequisicaoUrl("itens", id)));
  }

  buscarTipos(): Observable<CampoTipoInterface[]> {
    return this._emitirObs(this.http.get<CampoTipoInterface[]>(this._montarRequisicaoUrl("tipos")));
  }

  salvarItem(item): Observable<ItemInterface> {
    return this._emitirObs(this.http.post<ItemInterface>(this._montarRequisicaoUrl("itens"), item));
  }

  atualizarItem(id: number, item: ItemInterface): Observable<ItemInterface> {
    return this._emitirObs(this.http.put<ItemInterface>(this._montarRequisicaoUrl("itens", id), item));
  }

  excluirItemId(id: number): Observable<ItemInterface> {
    return this._emitirObs(this.http.delete<ItemInterface>(this._montarRequisicaoUrl("itens", id)));
  }

  /**
   * Método para montar url da requisição.
   * 
   * @author Luanderson Silva
   * @param endpoint caminho a ser adicionado a url.
   * @param id caso a requisição necessite passar um id.
   */
  private _montarRequisicaoUrl(endpoint: string, id?: number) {
    let url = `${environment.API_URL}/${endpoint}`;
    if (id) {
      url += `/${id}`
    }
    return url
  }

  /**
   * método para realizar apenas uma requisição e encerrar
   *  o observable automáticamente.
   * 
   * @author Luanderson Silva
   * @param observable observable da requisição
   */
  private _emitirObs(observable: Observable<any>): Observable<any> {
    return observable.pipe(take(1));
  }


}
