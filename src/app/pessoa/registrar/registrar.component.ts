import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../../model/Pessoa';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [PessoaService]
})
export class RegistrarComponent implements OnInit {

  valor:any;
  mensagem:string;
  pessoa: Pessoa = new Pessoa(null,"","","","","");

  constructor(
    private pessoaServico:PessoaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitForm(){
    this.pessoaServico.registrarPessoa(this.pessoa)
    .subscribe(res => {
      this.valor = res
      
      
      if(res.sucesso){
         
        console.info('mensagem sucesso');
        this.mensagem =  `
                              ${res.dados["PESSOA"].nome} 
                              cadastrado com sucesso!
                            `;

        this.router.navigate(['/pessoas']);
        
        

      } else {
        console.info('mensagem erro');
        this.mensagem = res.mensagemErro;
      }

    });

    console.info(this.valor);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    
    if (error instanceof Response) {
      console.info('entrou aq');
      //const body = error.json() || '';
      //const err = body.error || JSON.stringify(body);
      //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      console.info('entrou else');
      //errMsg = error.message ? error.message : error.toString();
    }
    //console.error(errMsg);
    //return Observable.throw(errMsg);
    return Promise.reject(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
