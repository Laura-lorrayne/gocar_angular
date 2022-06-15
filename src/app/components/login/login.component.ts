import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/clientes/clientes.service';
import { Cliente } from 'src/app/models/cliente';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required]})
    });
  }

  get username(): AbstractControl {
    return this.formLogin.controls['username'];
  }

  get password(): AbstractControl {
    return this.formLogin.controls['password'];
  }

  logar(): void{
    if(this.formLogin.valid){
      if(this.username.value && this.password.value){
        this.clienteService.login(this.username.value, this.password.value).subscribe({
          next: (data) => {
            console.log(data)
            if(data.length == 1){
              alert('Login realizado com sucesso!');
              data.forEach(u => {
                this.storage.set('usuario', JSON.stringify(u));
              })
              this.username.setValue(null)
              this.password.setValue(null)
              this.router.navigate(['home']);
            } else {
              alert('Usuário ou senha inválido!');
            }
          }, error: (error) => {
            alert(error.errors[0])
          }
        })
      }
    }
  }

}
