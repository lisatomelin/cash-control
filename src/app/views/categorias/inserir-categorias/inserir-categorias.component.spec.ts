import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCategoriasComponent } from './inserir-categorias.component';

describe('InserirCategoriasComponent', () => {
  let component: InserirCategoriasComponent;
  let fixture: ComponentFixture<InserirCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
