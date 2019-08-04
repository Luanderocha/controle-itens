import { take } from 'rxjs/operators';
import { environment } from './../../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FmFuncionarioService {

  constructor(
    // private http: HttpClient
  ) { }

    // listarFuncionarios(){
    //   return this.http.get<any>(`${environment.api_url}/funcionarios`).pipe(take(1));
    // }

}
