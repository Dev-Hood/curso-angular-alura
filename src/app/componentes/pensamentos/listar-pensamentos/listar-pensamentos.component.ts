import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
 listaPensamentos = [
  {
    conteudo : 'I teste angular',
    autoria: 'Tallys',
    modelo: 'modelo3'
  }
 ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
