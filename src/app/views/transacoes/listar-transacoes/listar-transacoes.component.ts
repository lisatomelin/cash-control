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
 

 /* @ViewChild(MatPaginator) paginator!: MatPaginator;

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;*/

  @Input() transactionsDatasInput: Transacao[];

  ngOnInit(): void {
    this.transactionsDatasInput;
    
  }

  /*handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }*/
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
