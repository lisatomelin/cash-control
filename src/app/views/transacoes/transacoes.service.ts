import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transacoes } from './models/transacoes';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  private API_URL = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  criar(transacoes: Transacoes): Observable<Transacoes> {
    return this.http.post<Transacoes>(environment.API_URL, transacoes);
  }

  selecionarTodos(): Observable<Transacoes[]> {
    return this.http.get<Transacoes[]>(environment.API_URL);
  }


}
