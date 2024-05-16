import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Transacao } from '../models/transacoes';

@Component({
  selector: 'app-listar-transacoes',
  templateUrl: './listar-transacoes.component.html',
  styleUrls: ['./listar-transacoes.component.scss'],
})
export class ListarTransacoesComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  @Input() transactionsDatasInput: Transacao[];

  ngOnInit(): void {
    this.transactionsDatasInput;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
