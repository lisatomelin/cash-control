import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Transacao, Transacoes } from '../models/transacoes';
import { TransacoesService } from '../transacoes.service';

@Component({
  selector: 'app-listar-transacoes',
  templateUrl: './listar-transacoes.component.html',
  styleUrls: [],
})
export class ListarTransacoesComponent  {
  @Input() transactionsDatasInput: Transacao[];
  
  
  ngOnInit(): void {    
    this.transactionsDatasInput;
    
    
  }
 

 
}
