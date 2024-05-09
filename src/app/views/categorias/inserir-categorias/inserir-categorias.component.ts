import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../models/categoria';
import { NotificationService } from 'src/app/core/services/notifications.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inserir-categorias',
  templateUrl: './inserir-categorias.component.html',
  styleUrls: ['./inserir-categorias.component.scss']
})
export class InserirCategoriasComponent implements OnInit {
  form?: FormGroup;

  constructor(private fb: FormBuilder, private categoriasService: CategoriasService,
    private router: Router, private notification: NotificationService){}


  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
    });

  }
  gravar(): void{
    this.categoriasService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err)
    })
  }

  processarSucesso(res: Categoria){
    this.notification.sucesso(
      `A categoria ${res.titulo} foi cadastrada com sucesso!`
    );
    
    this.router.navigate(['/categorias', 'listar']);
  }

  processarFalha(err:any){
    this.notification.erro(
      `A categoria ${err.titulo} não foi cadastrada!`
    );
    console.error('Erro:', err);
  }


}
