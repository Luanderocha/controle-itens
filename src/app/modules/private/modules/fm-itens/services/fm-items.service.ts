import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable()
export class FmItemsService {

  constructor(
    private http: HttpClient,
  ) { }

    buscarItens(){
      return this.http.get<any[]>(`${environment.api_url}/itens`).pipe(take(1));
    }

}
