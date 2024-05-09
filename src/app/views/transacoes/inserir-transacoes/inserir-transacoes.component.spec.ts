import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTransacoesComponent } from './inserir-transacoes.component';

describe('TransacoesFormsComponent', () => {
  let component: InserirTransacoesComponent;
  let fixture: ComponentFixture<InserirTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirTransacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
