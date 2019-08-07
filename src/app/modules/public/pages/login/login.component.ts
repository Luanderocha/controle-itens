import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/core/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: FormGroup

  constructor(
    private fb: FormBuilder,
    // private autenticacaoService: AutenticacaoService,
    private router:Router
  ) {
  }

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.usuario = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  entrar() {
    this.router.navigateByUrl('/ctis/home')
    // const nome = this.usuario.get('nome').value;
    // const password = this.usuario.get('senha').value;
    // this.autenticacaoService.autenticar(nome, password).subscribe(
    //   () => alert("sucesso"),
    //   err => alert(err.message)     
    // );
  }

}

