import { TestBed } from '@angular/core/testing';

import { TransacoesService } from './transacoes.service';
import { HttpClientModule } from '@angular/common/http';

describe('TransacoesService', () => {
  let service: TransacoesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TransacoesService],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
