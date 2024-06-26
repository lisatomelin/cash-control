import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationsService{
  constructor(private snackbar: MatSnackBar){}

  sucesso(mensagem: string): void {
    this.snackbar.open(mensagem, 'OK', {
      panelClass:['snackbar-sucesso'],
      duration: 3000,
    });
  }

  aviso(mensagem: string): void {
    this.snackbar.open(mensagem, 'OK', {
      panelClass:['snackbar-aviso']});
  }

  erro(mensagem: string): void {
    this.snackbar.open(mensagem, 'OK', {
      panelClass:['snackbar-erro']});
  }
}
