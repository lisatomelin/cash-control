import { Component, OnInit, inject } from '@angular/core';
import { Transacoes } from '../transacoes/models/transacoes';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TransacoesFormsComponent } from '../transacoes/transacoesForms/transacoesForms.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit{
  private dialogService = inject(MatDialog);
  
  
  transacoes: Transacoes[];
  displayedColumns = ['descricao', 'valor', 'tipoTransacao', 'dataTransacao', 'categoria']

  constructor(){
    this.transacoes = []
  }

  ngOnInit(): void {
    
  }

  public handleOpenModal(): void {
    this.dialogService.open(TransacoesFormsComponent, {
      width: '50vw',
      maxHeight: '80vh',
    });
  }

  


  

}
