import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransacoesComponent } from './listar-transacoes.component';

import { NotificationsService } from './../../../core/services/notifications.service';

import { LimitToPipe } from './../../../shared/pipes/limit-to.pipe';
import { SortByOrderPipe } from './../../../shared/pipes/sort-by-order.pipe';


describe('ListarTransacoesComponent', () => {
  let component: ListarTransacoesComponent;
  let fixture: ComponentFixture<ListarTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTransacoesComponent, LimitToPipe, SortByOrderPipe],
      providers: [NotificationsService, LimitToPipe, SortByOrderPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
