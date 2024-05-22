import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Transacoes } from '../transacoes/models/transacoes';
import { MatDialog } from '@angular/material/dialog';
import { InserirTransacoesComponent } from '../transacoes/inserir-transacoes/inserir-transacoes.component';
import { Subject, timer } from 'rxjs';
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

  constructor(private transacoesService: TransacoesService) {}

  ngOnInit(): void {
    this.getTransactionsDatas();
  }

  getTransactionsDatas(): void {
    this.transacoesService.getTransactionsDatas().subscribe({
      next: (response) => {
        response && (this.transactionsDatas = response);
        console.log(this.transactionsDatas);
      },
      error: (error) => console.log(error),
    });
  }

  public handleOpenModal(): void {
    const dialogRef = this.dialogService.open(InserirTransacoesComponent, {
      width: '50vw',
      maxHeight: '80vh',
    });

    dialogRef.afterClosed().subscribe((res) => {
      timer(500).subscribe(() => this.getTransactionsDatas());
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
