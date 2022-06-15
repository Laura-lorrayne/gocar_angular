import { Component, Input, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'grupo-carro',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponenent implements OnInit {

  @Input() grupo: Carro[] | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('Catalogo')
  }

  get titleGrupo(): string{
    return this.grupo != undefined ? this.grupo[0].grupo : '';
  }

}
