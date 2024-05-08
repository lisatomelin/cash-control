import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TransacoesComponent } from './transacoes.component';



@NgModule({
  declarations: [ TransacoesComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TransacoesModule { }
