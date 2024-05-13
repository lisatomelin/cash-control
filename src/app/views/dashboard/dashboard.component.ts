import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Transacoes } from '../transacoes/models/transacoes';
import { MatDialog } from '@angular/material/dialog';
import { InserirTransacoesComponent } from '../transacoes/inserir-transacoes/inserir-transacoes.component';
import { Observable, Subject, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TransacoesService } from '../transacoes/transacoes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private dialogService = inject(MatDialog);  
  transactionsDatas!: Transacoes;
  descricaoInicial = 'Salário';

  constructor(private transacoesService: TransacoesService){
    
  } 
  
  ngOnInit(): void {
    this.getTransactionsDatas(this.descricaoInicial); 
    
  }

  getTransactionsDatas(transactionsDatas: string): void {
    this.transacoesService.getTransactionsDatas().subscribe({
      next: (response) => {
        response && (this.transactionsDatas = response);
        console.log(this.transactionsDatas);
      },
      error: (error) => console.log(error),
    });
  }

  public handleOpenModal(): void {
    this.dialogService.open(InserirTransacoesComponent, {
      width: '50vw',
      maxHeight: '80vh',
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
