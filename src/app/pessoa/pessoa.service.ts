import { RetornoVO } from './../model/RetornoVO';
import { Pessoa } from './../model/Pessoa';
import { Injectable } from '@angular/core';

import { Headers, Http,Response, RequestOptions } from '@angular/http';


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

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class PessoaService {

 private url = 'http://localhost:8080/familiagebien/rest/pessoa/form';
 private urlRegistrar = 'http://localhost:8080/familiagebien/rest/pessoa/registrar';
 //private urlRegistrar = 'http://localhost:8080/familiagebien/rest/pessoa/buscar';
 

 //private _http:Http;
 private valor: any;
// private headers = new Headers({'Content-Type': 'application/json'},
  //                             {'Access-Control-Allow-Origin': 'http://localhost:4200'});

//private headers:Headers = null;
//headers.append('Content-Type', 'application/json');

  constructor(
    private http: Http
  ) { }

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
    //console.info(JSON.parse(res.json()));
    //console.info(res);
    //console.info(res.json().dados["PESSOA"]);
    //console.info(res.json()[0]);
    //console.info(res.json()[1]);
    let body = res.json();
    
    //    console.info(body.dados["PESSOA"].idPessoa);
    //console.info(body.nome);
    return body.data || { };
  }

  adicionarPessoa(pessoa:string){

  }

  registrarPessoa(pessoa: Pessoa): Observable<RetornoVO> {
    //console.info(JSON.stringify(pessoa));
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });
    
    //return this.http.get(this.urlRegistrar)
      //      .toPromise()
        //    .then(this.extractData)
          //  .catch(this.handleError);
            
         

   return this.http.post(this.urlRegistrar,JSON.stringify(pessoa),options)
   .map(res => res.json());
   
   //.toPromise();
   //.then(this.extractData)
   //.catch(this.handleError);
    
    
  } 
}
