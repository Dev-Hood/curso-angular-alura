import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
 listaPensamentos = [
  {
    conteudo : 'Passo informações para o componente filho',
    autoria: 'Componente Pai',
    modelo: 'modelo2'
  },
  {
    conteudo : 'Minha propriedade é decorada com @input',
    autoria: 'Componete filho',
    modelo: 'modelo1'
  },
  {
    conteudo : ' eduncacusncusncucn cnducnudcnsucnsucnsucci iincuiedncudncudncun icnsicusucnucsnc ncudcusnuscnuscn dncducnucndcxcxcxc  scscxcxcxcxcmxicnxicnicnxcnxcjnxjncjxncjxncjxcjxncjncjxcxjcnxjcxjcnxcnxncxjcnxjcxncjxncjxncjxncjxcnxjcxncxjcnxjcnxjcnxncjxcnxncjxnjxcnxcnxjcxncjxncxjcucn cnducducdncun unudncvudnudnvd cudcnudcnd ucnducnduvnduvnvdv',
    autoria: 'Componete filho',
    modelo: 'modelo3'
  },
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
