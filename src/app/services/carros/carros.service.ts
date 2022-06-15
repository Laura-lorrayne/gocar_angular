
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/models/carro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private carroSimular: Carro | undefined;

  constructor(
    private httpClient: HttpClient
  ) {

  }

  apiUrl: string = environment.apiUrlBase + '/carros/';

  setCarroASimular(carro: Carro){
    this.carroSimular = carro;
  }

  get simular(): any{
    return this.carroSimular;
  }

  save(obj: Carro) : Observable<Carro> {
    return this.httpClient.post<Carro>(`${this.apiUrl}` ,obj);
  }

  atualizar(obj: Carro) : Observable<Carro> {
    return this.httpClient.put<Carro>(`${this.apiUrl}/${obj.id}/`, obj);
  }

  deletar(id: number):  Observable<any>  {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}/`);
  }

  listAll() :  Observable<Carro[]> {
    return this.httpClient.get<Carro[]>(this.apiUrl);
  }

  getById(id: number):  Observable<Carro>  {
    return this.httpClient.get<Carro>(`${this.apiUrl}/${id}/`);
  }
}
