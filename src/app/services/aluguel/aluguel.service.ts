
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluguel } from 'src/app/models/aluguel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {


  constructor(
    private httpClient: HttpClient
  ) {

  }

  apiUrl: string = environment.apiUrlBase + '/alugueis/';

  save(obj: Aluguel) : Observable<Aluguel> {
    return this.httpClient.post<Aluguel>(`${this.apiUrl}` ,obj);
  }

  atualizar(obj: Aluguel) : Observable<Aluguel> {
    return this.httpClient.put<Aluguel>(`${this.apiUrl}/${obj.id}/`, obj);
  }

  deletar(id: number):  Observable<any>  {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}/`);
  }

  listAll() :  Observable<Aluguel[]> {
    return this.httpClient.get<Aluguel[]>(this.apiUrl);
  }

  getById(id: number):  Observable<Aluguel>  {
    return this.httpClient.get<Aluguel>(`${this.apiUrl}${id}/`);
  }
}
