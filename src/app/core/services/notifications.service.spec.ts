import { TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService, MatSnackBar],
    });
    service = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
