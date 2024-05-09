import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CategoriasService } from './services/categorias.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InserirCategoriasComponent } from './inserir-categorias/inserir-categorias.component';

@NgModule({
  declarations: [ListarCategoriasComponent, InserirCategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [CategoriasService],
})
export class CategoriasModule {}
