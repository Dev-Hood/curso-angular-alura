import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo 1'
  }








  constructor() { }

  ngOnInit(): void {
  }
  


  criarPensamento(){
    alert("novo pensamento")
  }


  cancelar(){
    alert("cancelado")
  }
}
