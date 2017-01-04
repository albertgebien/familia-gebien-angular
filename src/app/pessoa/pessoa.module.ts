
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';

import { MascaraDirective } from './../mascara.directive';


@NgModule({
    imports: [
        CommonModule,
        PessoaRoutingModule,
        FormsModule
        
    ],
    exports: [],
    declarations: [
        PessoaComponent,
        PessoaFormComponent,
        PessoaDetalheComponent,
        MascaraDirective
    ],
    providers: [],
})
export class PessoaModule { }
