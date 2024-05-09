import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Categoria } from '../../categorias/models/categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notifications.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoesForms.component.html',
  styleUrls: [],
})
export class TransacoesFormsComponent implements OnInit {
  private dialogRefService = inject(MatDialogRef<DashboardComponent>);
  
  form?: FormGroup;
  categorias$?: Observable<Categoria[]>;

  constructor(
    private notification: NotificationService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: ['', [Validators.required]],
      valor: [''],
      dataTransacao: [''],
      tipoTransacao: ['Entrada'],
      categoriaId: [undefined, [Validators.required]],
    });

    this.categorias$ = this.route.data.pipe(
      map((dados) => dados['categorias'])
    );
  }
  gravar() {}

  public handleCloseModal(): void {
    this.dialogRefService.close();
  }
}
