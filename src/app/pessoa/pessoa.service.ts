import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import { Pessoa } from '../model/Pessoa';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

 private url = 'http://localhost:8080/familiagebien/rest/pessoa/form';

 private _http:Http;
// private headers = new Headers({'Content-Type': 'application/json'},
  //                             {'Access-Control-Allow-Origin': 'http://localhost:4200'});

private headers:Headers = new Headers();
//headers.append('Content-Type', 'application/json');

  constructor(private http: Http) { 
    this._http = http;
    this.headers = new Headers();
    //this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    //this.headers.append('Access-Control-Allow-Origin', '*');
  }

  private handleError(error: any): Promise<any> {

    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  adicionarPessoa(valor:string){
    console.info(valor);
    this._http.post(this.url,valor,{headers: this.headers})
     .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);

  /*  this._http.get('http://localhost:8080/familiagebien/rest/pessoa/listar')
      .toPromise().then(response => response.json().data as Pessoa[])
               .catch(this.handleError);*/
  }

  
}
