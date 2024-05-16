import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTransacoesComponent } from './inserir-transacoes.component';

import { NotificationsService } from './../../../core/services/notifications.service';
import { CoreModule } from '../../../core/core.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TransacoesService } from '../transacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MAT_DIALOG_DATA, 
  MatDialogRef,
} from '@angular/material/dialog';

describe('InserirFormsComponent', () => {
  let component: InserirTransacoesComponent;
  let fixture: ComponentFixture<InserirTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirTransacoesComponent],
      providers: [
        CoreModule,
        NotificationsService,
        MatSnackBar,
        HttpClient,
        TransacoesService,
        HttpHandler,
        HttpHandler,
        { provide: MatDialogRef, useValue: [] },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
