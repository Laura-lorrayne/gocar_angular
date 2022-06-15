import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carros/carros.service';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  grupos: Carro[][] = [];

  constructor(
    private carroService: CarroService,
    private router: Router,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    if(!this.usuarioLogado()){
      this.router.navigate(['home']);
    } else {
      this.listAll();
    }
  }

  usuarioLogado(): boolean{
    try{
      let usuario =  JSON.parse(this.storage.get('usuario'));
      return usuario.id ? true : false;
    } catch(e){
      return false;
    }
  }

  save(): void {
    this.carroService.save(new Carro()).subscribe({
      next : (data) => {
        console.log(data);
      },error : (error) => {
        console.log(error);
      }
    });
  }

  atualizar(): void {
    this.carroService.atualizar(new Carro()).subscribe({
      next : (data) => {
        console.log(data);
      },error : (error) => {
        console.log(error);
      }
    });
  }

  listAll(): void {
    this.carroService.listAll().subscribe({
      next : (data) => {
        this.grupos = this.orderGrupo(data);
        console.log(this.grupos);
      },error : (error) => {
        console.log(error);
      }
    })
  }

  deletar(id: number): void {
    this.carroService.deletar(id).subscribe({
      next : (data) => {
        console.log(data);
      },error : (error) => {
        console.log(error);
      }
    })
  }

  findById(id: number): void {
    this.carroService.getById(id).subscribe({
      next : (data) => {
        console.log(data);
      },error : (error) => {
        console.log(error);
      }
    })
  }

  private orderGrupo(lista: Carro[]){
    let grupos: string[] = [];
    lista.forEach(car => {
      if(!grupos.includes(car.grupo)){
        grupos.push(car.grupo);
      }
    })
    var gruposCar: Carro[][] = [];
    grupos.forEach( (grupo) => {
      let g: Carro[] = lista.filter(car => car.grupo === grupo);
      gruposCar.push(g);
    })
    return gruposCar;
  }

}

