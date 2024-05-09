import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirTransacoesComponent } from './inserir-transacoes/inserir-transacoes.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacoesRoutingModule { }
