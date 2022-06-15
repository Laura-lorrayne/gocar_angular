
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  apiUrl: string = environment.apiUrlBase + '/clientes/';

  save(obj: any) : Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${this.apiUrl}` ,obj);
  }

  atualizar(obj: Cliente) : Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.apiUrl}/${obj.id}/`, obj);
  }

  deletar(id: number):  Observable<any>  {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}/`);
  }

  listAll() :  Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }

  getById(id: number):  Observable<Cliente>  {
    return this.httpClient.get<Cliente>(`${this.apiUrl}${id}/`);
  }

  login(username: any, password: any) {
    return this.httpClient.get<Cliente[]>(`${this.apiUrl}?email=${username}&senha=${password}`);
  }
}
