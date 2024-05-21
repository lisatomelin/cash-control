import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Transacao } from '../models/transacoes';



@Component({
  selector: 'app-listar-transacoes',
  templateUrl: './listar-transacoes.component.html',
  styleUrls: ['./listar-transacoes.component.scss'],
})
export class ListarTransacoesComponent implements OnInit, OnDestroy {
  @Input() transactionsDatasInput: Transacao[];
  private readonly destroy$: Subject<void> = new Subject();

  itemsPerPage: number = 10;
  totalItemsDisplayed: number = 20;

  mostrarMaisItens() {
    this.totalItemsDisplayed = this.transactionsDatasInput.length;
  }

  ngOnInit(): void {
    
  }

  ordenarDecrescente(): void{
    this.transactionsDatasInput.sort((a,b) => b.id - a.id);
  }

  ordenarCrescente(): void{
    this.transactionsDatasInput.sort((a,b) => a.id - b.id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
