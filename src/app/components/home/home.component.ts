import { CarroService } from 'src/app/services/carros/carros.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carros: Carro[] = [];

  constructor(
    private router: Router,
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
    this.listAll();
  }

  active(index: number): string{
    return index == 0 ?  'active' : ''
  }

  listAll(): void {
    this.carroService.listAll().subscribe({
      next : (data) => {
        this.carros = data;
        console.log(this.carros);
      },error : (error) => {
        console.log(error);
      }
    })
  }

}
