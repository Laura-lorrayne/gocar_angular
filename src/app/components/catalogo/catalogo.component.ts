import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carros/carros.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  grupos: Carro[][] = [];

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
    console.log('Catalogo')
    this.listAll();
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

