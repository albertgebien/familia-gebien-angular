import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../model';
import {PessoaService} from '../pessoa.service';

export enum TipoData {
    EXATAMENTE,
    APROXIMADAMENTE
}

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
  providers: [PessoaService]
})
export class PessoaFormComponent implements OnInit {

  pessoa:Pessoa = new Pessoa(null,"","","","","");  
  private _pessoaService:PessoaService;

  listaTipoData: string[] = ["Exatamente em", "Aproximadamente em"];

  constructor(servico:PessoaService) { 
    this._pessoaService = servico;
  }

  ngOnInit() {
  }

  onSubmitTemplateBased(){
    this._pessoaService.adicionarPessoa(JSON.stringify(this.pessoa));
   alert(this.pessoa.nome);
  }

}
