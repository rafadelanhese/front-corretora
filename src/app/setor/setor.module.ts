import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetorComponent } from './setor.component';
import { SetorListaComponent } from './setor-lista/setor-lista.component';

@NgModule({
  declarations: [
    SetorComponent,
    SetorListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SetorComponent,
    SetorListaComponent
  ]
})
export class SetorModule { }
