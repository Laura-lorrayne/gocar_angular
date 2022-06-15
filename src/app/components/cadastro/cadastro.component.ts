import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup;

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      name: new FormControl('', {validators: [Validators.required]}),
      cpf: new FormControl('', {validators: [Validators.required]}),
      rg: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required]}),
      confirmpassword: new FormControl('', {validators: [Validators.required]}),
      referencia: new FormControl('', {validators: [Validators.required]}),
      bairro: new FormControl('', {validators: [Validators.required]}),
      numero: new FormControl('', {validators: [Validators.required]}),
      endereco: new FormControl('', {validators: [Validators.required]}),
      telefone: new FormControl('', {validators: [Validators.required]}),
      state: new FormControl('', {validators: [Validators.required]})
    });
  }

  get name(): AbstractControl {
    return this.formCadastro.controls['name'];
  }

  get cpf(): AbstractControl {
    return this.formCadastro.controls['cpf'];
  }

  get rg(): AbstractControl {
    return this.formCadastro.controls['rg'];
  }

  get email(): AbstractControl {
    return this.formCadastro.controls['email'];
  }

  get password(): AbstractControl {
    return this.formCadastro.controls['password'];
  }

  get confirmpassword(): AbstractControl {
    return this.formCadastro.controls['confirmpassword'];
  }

  get referencia(): AbstractControl {
    return this.formCadastro.controls['referencia'];
  }

  get bairro(): AbstractControl {
    return this.formCadastro.controls['bairro'];
  }

  get numero(): AbstractControl {
    return this.formCadastro.controls['numero'];
  }

  get endereco(): AbstractControl {
    return this.formCadastro.controls['endereco'];
  }

  get telefone(): AbstractControl {
    return this.formCadastro.controls['telefone'];
  }

  get state(): AbstractControl {
    return this.formCadastro.controls['state'];
  }

  cadastrar(): void{
    if(this.password.value != this.confirmpassword.value){
      alert('Senhas não são iguais!');
      return;
    }

    if(!this.name.value || !this.cpf.value || !this.rg.value ||
      !this.email.value || !this.password.value ||
      !this.referencia.value || !this.bairro.value || !this.numero.value ||
      !this.endereco.value || !this.telefone.value || !this.state.value){
        alert('Preencha todos os campos obrigátorios!');
        return;
    }

    let cliente= {
      nome: this.name.value,
      cpf: this.cpf.value,
      rg: this.rg.value,
      email: this.email.value,
      senha: this.password.value,
      referencia: this.referencia.value,
      bairro: this.bairro.value,
      numero: this.numero.value,
      endereco: this.endereco.value,
      telefone: this.telefone.value,
      estado: this.state.value
    }


    this.clienteService.save(cliente).subscribe({
      next: (data) => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['login']);
      },error: (error) => {
        alert('Erro ao cadastrar novo usuário!');
      }
    })

  }

}
