import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ConteudoComponent} from './component/conteudo/conteudo.component';
import {StartComponent} from './component/views/start/start.component';
const routes: Routes = [

{
  path: "",
  component: ConteudoComponent
},{
  path:"start",
  component: StartComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
