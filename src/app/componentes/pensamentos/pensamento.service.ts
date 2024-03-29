import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamento'

  constructor(private httpClient: HttpClient) {

  }

  listar(pagina: number, filtro: string): Observable<Pensamento[]>{
    const itensPorPagina = 4;

    let params = new HttpParams()
      .set("_page",pagina)
      .set("_limit",itensPorPagina)

      if(filtro.trim().length > 2){
        params = params.set("q",filtro)
      }

    //return this.httpClient.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`)
    return this.httpClient.get<Pensamento[]>(this.API,{params})
  }
  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.httpClient.post<Pensamento>(this.API,pensamento)
  }
  editar(pensamento :Pensamento) : Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.httpClient.put<Pensamento>(url, pensamento)
  }
  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.httpClient.delete<Pensamento>(url)
  }
  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.httpClient.get<Pensamento>(url)
  }

}
