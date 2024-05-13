import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Transacao, Transacoes } from '../models/transacoes';
import { TransacoesService } from '../transacoes.service';

@Component({
  selector: 'app-listar-transacoes',
  templateUrl: './listar-transacoes.component.html',
  styleUrls: ['./listar-transacoes.component.scss'],
})
export class ListarTransacoesComponent implements OnInit, OnDestroy{
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
