import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacoesFormsComponent } from './transacoesForms.component';

describe('TransacoesFormsComponent', () => {
  let component: TransacoesFormsComponent;
  let fixture: ComponentFixture<TransacoesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacoesFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransacoesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
