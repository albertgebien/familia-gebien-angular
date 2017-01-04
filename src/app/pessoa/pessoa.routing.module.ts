import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaComponent } from './pessoa.component';


const pessoaRoutes = [
    {path: 'pessoas', component: PessoaComponent},
    {path: 'pessoas/novo', component: PessoaFormComponent},
    {path: 'pessoas/:id', component: PessoaDetalheComponent},
    {path: 'pessoas/:id/editar', component: PessoaFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(pessoaRoutes)],
    exports: [RouterModule]
})
export class PessoaRoutingModule {}
