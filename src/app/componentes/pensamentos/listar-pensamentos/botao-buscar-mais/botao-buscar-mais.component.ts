import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-buscar-mais',
  templateUrl: './botao-buscar-mais.component.html',
  styleUrls: ['./botao-buscar-mais.component.css']
})
export class BotaoBuscarMaisComponent implements OnInit {
  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
