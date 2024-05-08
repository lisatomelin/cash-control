import { Component, OnInit } from '@angular/core';
import { Transacoes } from '../transacoes/models/transacoes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  transacoes: Transacoes[];
  displayedColumns = ['descricao', 'valor', 'tipoTransacao', 'dataTransacao']

  constructor(){
    this.transacoes = []
  }

  ngOnInit(): void {
    
  }

}
