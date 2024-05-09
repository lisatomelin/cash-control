import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Transacoes } from '../models/transacoes';

@Component({
  selector: 'app-listar-transacoes',
  templateUrl: './listar-transacoes.component.html',
  styleUrls: ['./listar-transacoes.component.scss'],
})
export class ListarTransacoesComponent implements OnInit {
  transacoes$?: Observable<Transacoes[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.transacoes$ = this.route.data.pipe(
      map((dados) => dados['transacoes'])
    );
  }
}
