import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../../model/Pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [PessoaService]
})
export class RegistrarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa(null,"","","","","");

  constructor(
    private pessoaServico:PessoaService
  ) { }

  ngOnInit() {
  }

  onSubmitForm(){
    this.pessoaServico.registrarPessoa(this.pessoa);
  }

}
