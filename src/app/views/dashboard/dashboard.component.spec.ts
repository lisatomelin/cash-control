import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { NotificationsService } from './../../core/services/notifications.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransacoesService } from '../transacoes/transacoes.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MAT_DIALOG_SCROLL_STRATEGY,
} from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DIALOG_SCROLL_STRATEGY, Dialog } from '@angular/cdk/dialog';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        NotificationsService,
        TransacoesService,
        MatDialog,
        Dialog,
        { provide: InjectionToken, useValue: [] },
        { provide: MatDialogRef, useValue: [] },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MAT_DIALOG_SCROLL_STRATEGY, useValue: [] },
        { provide: DIALOG_SCROLL_STRATEGY, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
