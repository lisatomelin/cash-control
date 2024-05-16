import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTransacoesComponent } from './inserir-transacoes.component';
import { CoreModule } from 'src/app/core/core.module';
import { NotificationsService } from 'src/app/core/services/notifications.service';

describe('TransacoesFormsComponent', () => {
  let component: InserirTransacoesComponent;
  let fixture: ComponentFixture<InserirTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirTransacoesComponent, NotificationsService ],
      providers: [ CoreModule]
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
