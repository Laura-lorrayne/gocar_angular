import { Router } from '@angular/router';
import { FornecedorService } from './../../services/fornecedor/fornecedor.service';
import { Carro } from 'src/app/models/carro';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarroService } from 'src/app/services/carros/carros.service';
import { Fornecedor } from 'src/app/models/fornecedor';

@Component({
  selector: 'app-simular',
  templateUrl: './simular.component.html',
  styleUrls: ['./simular.component.css']
})
export class SimularComponent implements OnInit {

  fornecedor: Fornecedor | undefined

  constructor(
    private router: Router,
    private carroService: CarroService,
    private fornecedorService: FornecedorService
  ) { }

  carro: Carro | undefined;

  ngOnInit(): void {
    this.carro = this.carroService.simular
    if(this.carro){
      this.consultarForncedor(this.carro?.fornecedor);
    } else {
      this.router.navigate(['home']);
    }

  }

  consultarForncedor(idFornecedor: number): void {
    this.fornecedorService.getById(idFornecedor).subscribe({
      next: (data) => {
        this.fornecedor = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  hint(): string {
    return this.fornecedor?.endereco + ' \n ' + this.fornecedor?.bairro + ' ' + this.fornecedor?.cidade + '-' + this.fornecedor?.estado;
  }

  localRetirada(): string {
    return this.fornecedor?.nome + ' - ' + this.fornecedor?.cidade + '-' + this.fornecedor?.estado;
  }

}


