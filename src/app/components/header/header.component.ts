import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponenent implements OnInit {

  constructor(
    private router: Router,
    private storage: LocalStorageService
  ) {

  }

  ngOnInit(): void {

  }


  go(path: any){
    this.router.navigate([path]);
  }

  usuarioLogado(): boolean{
    try{
      let usuario =  JSON.parse(this.storage.get('usuario'));
      return usuario.id ? true : false;
    } catch(e){
      return false;
    }
  }

  logout(): void{
    this.storage.clear();
    this.router.navigate(['home']);
  }

}
