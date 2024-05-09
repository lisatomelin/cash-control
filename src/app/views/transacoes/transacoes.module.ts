import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { InserirTransacoesComponent } from './inserir-transacoes/inserir-transacoes.component';
import { ListarTransacoesComponent } from './listar-transacoes/listar-transacoes.component';
import { TransacoesService } from './transacoes.service';
import { MatDatepickerModule } from '@angular/material/datepicker'


@NgModule({
  declarations: [InserirTransacoesComponent, ListarTransacoesComponent],
  imports: [
    CommonModule,    
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
   
  ],
  providers: [TransacoesService]
})
export class TransacoesModule {}
