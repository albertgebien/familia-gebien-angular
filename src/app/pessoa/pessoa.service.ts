import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import { Pessoa } from '../model/Pessoa';

//import 'rxjs/add/operator/toPromise';

// Observable class extensions
//import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/throw';

// Observable operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';

@Injectable()
export class PessoaService {

 private url = 'http://localhost:8080/familiagebien/rest/pessoa/form';
 private urlRegistrar = 'http://localhost:8080/familiagebien/rest/pessoa/registrar';

 private _http:Http;
 private valor: any;
// private headers = new Headers({'Content-Type': 'application/json'},
  //                             {'Access-Control-Allow-Origin': 'http://localhost:4200'});

private headers:Headers = new Headers();
//headers.append('Content-Type', 'application/json');

  constructor(private http: Http) { 
    this._http = http;
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    //this.headers.append('Access-Control-Allow-Origin', '*');
  }

  private handleError(error: any): Promise<any> {

    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  adicionarPessoa(valor:string){
    
    //this._http.post(this.url,valor,{headers: this.headers})
     //.toPromise()
    //.then(res => res.json().data)
    //.catch(this.handleError);

    console.info(this.valor);

  /*  this._http.get('http://localhost:8080/familiagebien/rest/pessoa/listar')
      .toPromise().then(response => response.json().data as Pessoa[])
               .catch(this.handleError);*/
  }

  private extractData(res: any) {
    let body = res.json();
    console.info(body);
    return body.data || { };
  }

  registrarPessoa(pessoa: Pessoa): Promise<string>{
    //console.info(JSON.stringify(pessoa));
    
    this._http.post(this.urlRegistrar,JSON.stringify(pessoa),{headers: this.headers})
    .subscribe(res => this.valor = res.json());

    console.info(this.valor);
    //http.get('people.json').subscribe((res:Response) => this.people = res.json());

    
    //.then(res => res.json().data).catch(this.handleError);

    return null;
  } 
}
