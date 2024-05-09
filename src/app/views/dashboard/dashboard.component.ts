import { Component, OnInit, inject } from '@angular/core';
import { Transacoes } from '../transacoes/models/transacoes';
import { MatDialog } from '@angular/material/dialog';
import { InserirTransacoesComponent } from '../transacoes/inserir-transacoes/inserir-transacoes.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [],
})
export class DashboardComponent implements OnInit {
  private dialogService = inject(MatDialog);
  public transacoes: Transacoes[];
  displayedColumns = ['descricao', 'preco', 'tipoTransacao', 'dataTransacao', 'categoria']

  constructor(){
    this.transacoes = []
  } 

  ngOnInit(): void {}

  public handleOpenModal(): void {
    this.dialogService.open(InserirTransacoesComponent, {
      width: '50vw',
      maxHeight: '80vh',
    });
  }
}
