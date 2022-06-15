import { Router } from '@angular/router';
import { FornecedorService } from './../../services/fornecedor/fornecedor.service';
import { Carro } from 'src/app/models/carro';
import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carros/carros.service';
import { Fornecedor } from 'src/app/models/fornecedor';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Aluguel } from 'src/app/models/aluguel';
import { AluguelService } from 'src/app/services/aluguel/aluguel.service';
import { Cliente } from 'src/app/models/cliente';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage';

@Component({
  selector: 'app-simular',
  templateUrl: './simular.component.html',
  styleUrls: ['./simular.component.css']
})
export class SimularComponent implements OnInit {

  fornecedor!: Fornecedor;

  formSimular!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private carroService: CarroService,
    private fornecedorService: FornecedorService,
    private aluguelService: AluguelService,
    private storage: LocalStorageService
  ) {

  }

  carro: Carro | undefined;

  ngOnInit(): void {
    if(!this.usuarioLogado()){
      this.router.navigate(['home']);
    } else {
      this.carro = this.carroService.simular
      if(this.carro){
        this.consultarForncedor(this.carro?.fornecedor);
      } else {
        this.router.navigate(['home']);
      };

      this.formSimular = new FormGroup({
        localRetirada: new FormControl('', {validators: [Validators.required]}),
        dataRetirada:  new FormControl(this.dataAtual, {validators: [Validators.required]}),
        horaRetirada:  new FormControl('', {validators: [Validators.required]}),
        dataDevolucao:  new FormControl(this.dataAtual, {validators: [Validators.required]}),
        horaDevolucao:  new FormControl('', {validators: [Validators.required]}),
        valor:  new FormControl(this.valor(), {validators: [Validators.required]})
      });
      this.formSimular.controls['localRetirada'].disable();
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

  consultarForncedor(idFornecedor: number): void {
    this.fornecedorService.getById(idFornecedor).subscribe({
      next: (data) => {
        this.fornecedor = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  get dataAtual(): string {
    let d = new Date();
    let dd = this.formataData(d);
    console.log(dd);
    return dd;
  }

  hint(): string {
    return this.fornecedor?.endereco + ' \n ' + this.fornecedor?.bairro + ' ' + this.fornecedor?.cidade + '-' + this.fornecedor?.estado;
  }

  get localRetirada(): string {
    return this.fornecedor?.nome + ' - ' + this.fornecedor?.cidade + '-' + this.fornecedor?.estado;
  }

  get dataRetirada(): AbstractControl {
    return this.formSimular.controls['dataRetirada'];
  }

  get horaRetirada(): AbstractControl {
    return this.formSimular.controls['horaRetirada'];
  }

  get horaDevolucao(): AbstractControl {
    return this.formSimular.controls['horaDevolucao'];
  }

  get dataDevolucao(): AbstractControl {
    return this.formSimular.controls['dataDevolucao'];
  }

  get valorAluguel(): AbstractControl {
    return this.formSimular.controls['valor'];
  }


  alugar(): void{
    if(!this.dataRetirada.value || !this.horaRetirada.value || !this.horaDevolucao.value || !this.dataDevolucao.value || !this.valorAluguel.value || !this.carro ){
      return;
    }

    let valor = this.valorAluguel.value.substring(3);

    let cliente: Cliente = JSON.parse(this.storage.get('usuario'));

    let aluguel = {
      dataDevolucao: this.dataDevolucao.value,
      dataRetirada: this.dataRetirada.value,
      horaDevolucao: this.horaDevolucao.value,
      horaRetirada: this.horaRetirada.value,
      valor: valor,
      idCarro: this.carro?.id,
      idCliente: cliente.id,
      idFornecedor: this.fornecedor.id,
      status: 'Ativo'
    }

    this.aluguelService.save(aluguel).subscribe({
      next: (data) => {
        alert('Operação realizada com sucesso!');
        this.router.navigate(['catalogo']);
      }, error: (erro) => {
        console.log(erro);
        alert(erro);
      }
    })

  }

  valor(): string {
    if(this.formSimular){
      if(this.dataRetirada && this.dataDevolucao && this.carro?.valor){
        var dias = this.getDias(this.dataDevolucao.value, this.dataRetirada.value);
        return 'R$ ' + this.carro?.valor * dias
      }
    }
    return this.carro?.valor ? 'R$ '+ this.carro?.valor : 'R$ 00,00';
  }

  getDias(dataInicio: string, dataFim: string): number {
    let dtInicio = new Date(dataInicio);
    let dtFim = new Date(dataFim);
    let timeDiff = Math.abs(dtFim.getTime() - dtInicio.getTime());
    return Math.round(timeDiff / (1000 * 3600 * 24)) + Number(1);
  }

  formataData(date: Date): string{
    var datap = date;
    var dia = datap.getDate();
    var mes = datap.getMonth() + 1;
    var ano = datap.getFullYear();
    let messtring = (mes < 10) ? '0'+mes: mes;
    return ano + '-' +  messtring + '-' + dia;
  }

  formValid(): boolean{
    return this.formSimular.valid;
  }

}


