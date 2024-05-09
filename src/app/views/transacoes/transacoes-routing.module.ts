import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirTransacoesComponent } from './inserir-transacoes/inserir-transacoes.component';
import { ListarTransacoesComponent } from './listar-transacoes/listar-transacoes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'Inserir',
    component: InserirTransacoesComponent,
    
  },
  {
    path: 'Listar',
    component: ListarTransacoesComponent,
    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacoesRoutingModule { }
