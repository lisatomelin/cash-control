import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from './../../../core/services/notifications.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TransacoesService } from '../transacoes.service';
import { Transacao } from '../models/transacoes';
import { TipoTransacao } from '../models/tipoTransacao';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-transacoes',
  templateUrl: './inserir-transacoes.component.html',
  styleUrls: ['./inserir-transacoes.component.scss'],
})
export class InserirTransacoesComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  private dialogRefService = inject(MatDialogRef<DashboardComponent>);
  public tipoTransacaoEnum = TipoTransacao;
  transacaoAdicionada = new EventEmitter<Transacao>();

  form: FormGroup;

  constructor(
    private transacoesService: TransacoesService,
    private notification: NotificationsService,
    private fb: FormBuilder
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

    this.transacoesService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Transacao) {
    this.notification.sucesso(`A transacão foi cadastrada com sucesso!`);
    this.transacaoAdicionada.emit(res);

    this.dialogRefService.close();
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }

  public handleCloseModal(): void {
    this.dialogRefService.close();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
