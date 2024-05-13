import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from './models/transacoes';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  private API_URL = `https://server-node-transacao.onrender.com/transacao`;

  constructor(private http: HttpClient) {}

  getTransactionsDatas(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  criar(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(this.API_URL, transacao);
  }
}
