import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import { NotificationService } from '../notifications.service';


@NgModule({
  declarations: [],
  imports: [MatSnackBarModule],
  providers: [
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        hotizontalPosition: 'center',
        
      },
    },
    NotificationService,
  ],
})
export class NotificationsModule { }