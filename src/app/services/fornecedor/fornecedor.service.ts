
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from 'src/app/models/fornecedor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {


  constructor(
    private httpClient: HttpClient
  ) {

  }

  apiUrl: string = environment.apiUrlBase + '/fornecedores/';

  save(obj: Fornecedor) : Observable<Fornecedor> {
    return this.httpClient.post<Fornecedor>(`${this.apiUrl}` ,obj);
  }

  atualizar(obj: Fornecedor) : Observable<Fornecedor> {
    return this.httpClient.put<Fornecedor>(`${this.apiUrl}/${obj.id}/`, obj);
  }

  deletar(id: number):  Observable<any>  {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}/`);
  }

  listAll() :  Observable<Fornecedor[]> {
    return this.httpClient.get<Fornecedor[]>(this.apiUrl);
  }

  getById(id: number):  Observable<Fornecedor>  {
    return this.httpClient.get<Fornecedor>(`${this.apiUrl}${id}/`);
  }
}
