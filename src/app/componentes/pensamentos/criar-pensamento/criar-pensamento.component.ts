import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  exibeMsg : Boolean = false
  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router

    ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){

  }

  retiraShadow(){
    //let elemento = elemento as HTMLElement
    //elemento.classList.remove('not-content')
  }

  veriPreenchimento(): Boolean{
    let verificador: Boolean = true
    const elements = document.querySelectorAll('.input');
    elements.forEach(element => {
      const inputElement = element as HTMLInputElement;


      if(!inputElement.value){
        inputElement.classList.add('not-content')
        verificador = false
      }
    });
    return verificador
  }

  exibirAlerta() {
    this.exibeMsg = true;

    setTimeout(() => {
      this.exibeMsg = false;
    }, 7000); // 7 segundos (7000 milissegundos)
  }

  criarPensamento(){

    if(this.veriPreenchimento()){
      this.service.criar(this.pensamento).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      })
    }else{
      this.exibirAlerta()
    }


  }


  cancelar(){
    alert("cancelado")
  }
}
