import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { Component, Input, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carros/carros.service';

@Component({
  selector: 'card-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CardCarroComponenent implements OnInit {

  @Input() carro: Carro | undefined
  constructor(
    private router: Router,
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
    console.log('Catalogo')
  }

  get manual(): string {
    return this.carro?.automatico ? 'automatico' : 'manual';
  }


  simular(): void {
    if(this.carro){
      this.carroService.setCarroASimular(this.carro);
      this.router.navigate(['simular']);
    }

  }

}
