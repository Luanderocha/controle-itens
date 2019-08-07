import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {


  constructor(
    private http: HttpClient
  ) { }

  autenticar(nome: string, password: string): Observable<any> {
    return this.http.post<any>(`http://localhost:3001/login/`, { nome, password }, { observe: "response" })
  }
}
