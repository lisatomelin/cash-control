import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from './../../../core/services/notifications.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TransacoesService } from '../transacoes.service';
import { Transacao } from '../models/transacoes';
import { TipoTransacao } from '../models/tipoTransacao';
import { take } from 'rxjs';

@Component({
  selector: 'app-transacoes',
  templateUrl: './inserir-transacoes.component.html',
  styleUrls: ['./inserir-transacoes.component.scss'],
})
export class InserirTransacoesComponent implements OnInit {
  
  tipoTransacaoEnum = TipoTransacao;
  form: FormGroup;

  constructor(
    private transacoesService: TransacoesService,
    private notification: NotificationsService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef <InserirTransacoesComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: ['', [Validators.required]],
      preco: [null, [Validators.required]],
      tipoTransacao: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  }

  gravar(): void {
    const precoControl = this.form?.get('preco');
    precoControl?.setValue(Number(precoControl.value));

    this.transacoesService.criar(this.form?.value)
      .pipe(take(1))
      .subscribe({
        next: (res) => this.processarSucesso(res),
        error: (err) => this.processarFalha(err),
      });
  }

  processarSucesso(res: Transacao) {
    this.notification.sucesso(`A transacão foi cadastrada com sucesso!`);
    
    this.handleCloseModal(!!res);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }

  handleCloseModal(transacaoAdicionada: boolean = false): void {
    this.dialogRef.close(transacaoAdicionada);
  }

 
}
