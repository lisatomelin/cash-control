import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Transacoes } from '../transacoes/models/transacoes';
import { MatDialog } from '@angular/material/dialog';
import { InserirTransacoesComponent } from '../transacoes/inserir-transacoes/inserir-transacoes.component';
import { Subject, take, takeUntil } from 'rxjs';
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
    this.transacoesService
      .getTransactionsDatas()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          response && (this.transactionsDatas = response);
          console.log(this.transactionsDatas);
        },
        error: (error) => console.log(error),
      });
  }

  handleOpenModal(): void {
    const dialogRef = this.dialogService.open(InserirTransacoesComponent, {
      width: '50vw',
      maxHeight: '80vh',
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: boolean) => {
      if (!res) return;

      this.getTransactionsDatas();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
