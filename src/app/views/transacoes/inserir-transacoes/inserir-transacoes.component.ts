import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notifications.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TransacoesService } from '../transacoes.service';
import { Transacoes } from '../models/transacoes';

@Component({
  selector: 'app-transacoes',
  templateUrl: './inserir-transacoes.component.html',
  styleUrls: [],
})
export class InserirTransacoesComponent implements OnInit {
  private dialogRefService = inject(MatDialogRef<DashboardComponent>);
  
  form?: FormGroup;  

  constructor(
    private transacoesService: TransacoesService,
    private notification: NotificationService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: ['', [Validators.required]],
      preco: [''],
      dataTransacao: [''],
      tipoTransacao: ['E'],
      categoria: ['', [Validators.required]],
    });

  }
  gravar(): void  {
    this.transacoesService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Transacoes) {
    this.notification.sucesso(
      `A transacão ${res.descricao} foi cadastrada com sucesso!`
    );

    this.router.navigate(['/transacoes', 'listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }

  public handleCloseModal(): void {
    this.dialogRefService.close();
  }
}
