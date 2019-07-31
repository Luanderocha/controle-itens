import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmItensRoutingModule } from './fm-itens-routing.module';
import { RegisterItemsComponent } from './components/register-items/register-items.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';


@NgModule({
  declarations: [RegisterItemsComponent, SearchItemsComponent],
  imports: [
    CommonModule,
    FmItensRoutingModule,
  ],
  exports: [
    RegisterItemsComponent,
    SearchItemsComponent
  ]
})
export class FmItensModule { }
