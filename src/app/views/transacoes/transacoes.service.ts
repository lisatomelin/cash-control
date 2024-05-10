import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacoes } from './models/transacoes';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  private API_URL = `https://server-node-transacao.onrender.com/transacao`;
  

  constructor(private http: HttpClient) {}

  getTransactionsDatas(): Observable<any> {
    return this.http.get(this.API_URL)
  }

  //criar(transacoes: Transacoes): Observable<Transacoes> {
    //return this.http.post<Transacoes>(environment.API_URL, transacoes);
 // }

  //selecionarTodos(): Observable<Transacoes[]> {
   // return this.http.get<Transacoes[]>(environment.API_URL);
  //}

  


}
